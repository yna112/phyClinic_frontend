import { useParams } from "react-router-dom";
import "./PatientDetails.css";
import { useEffect, useState } from "react";
import web from "../Services/WebApi";
import { PatientModel } from "../Models/PatientModel";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { TherapyModel } from "../Models/TherapyModel";
import store from "../../Redux/store";

function PatientDetails(): JSX.Element {
    const params=useParams();
    const patientId=+(params.id||0);
    console.log(typeof(patientId))
    const[patient,setPatient]=useState<PatientModel>();
    const [modal,setModal]=useState<boolean>(false);
    const [therapiesByPatientId,setTherapiesByPatientId]=useState<TherapyModel[]>([])
    const [nextTherapy, setNextTherapy] = useState<TherapyModel | null>(null); // מצב ראשוני null
    const [prevTherapy,setPrevTherapy]=useState<TherapyModel>();

    
    const sortedFilteredTherapies = therapiesByPatientId.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0; 
      const dateB = b.date ? new Date(b.date).getTime() : 0; 
      
      return dateA - dateB; // Sort in ascending order
  });
  
  
//  setTherapiesByPatientId(sortedFilteredTherapies);


useEffect(() => {
  // מיין את המערך
  const sortedTherapies = [...therapiesByPatientId].sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      
      return dateA - dateB;
  });

  // מצא את הטיפול הבא
  const upcomingTherapy = sortedTherapies.find((t) => {
      return t.date ? t.date >= new Date() : false;
  });
  setNextTherapy(upcomingTherapy?upcomingTherapy:null)
  console.log("OOOOP"+nextTherapy)

}, [therapiesByPatientId]); // הוסף כ-dependency

  

   


    useEffect(()=>{


        web.getPatientById(patientId)
        .then((res)=>{
            setPatient(res.data)
            console.log(res.data);

            console.log(patient)
            const factor=res.data.therapyList
            console.log("TTTRRTRTRT:       "+JSON.stringify(factor))
            setTherapiesByPatientId(factor);

          })
        .catch(()=>{
                console.log('לא הצליח')
        })

       

      
         },[patientId]);

         


         useEffect(() => {
          setTherapiesByPatientId(sortedFilteredTherapies)
         

          console.log("Updated therapiesByPatientId: "+ therapiesByPatientId);
          console.log("NEXT THERAPY: "+ nextTherapy);

      }, [therapiesByPatientId]);



      useEffect(()=>{
        const nextTherapyy= sortedFilteredTherapies.find((t) => {
          return t.date ? t.date >= new Date() : 'אין טיפול'; 
      });
  
  
      console.log("NEXT THERAPY: "+ nextTherapy);

      },[nextTherapy])


         useEffect(()=>{
       //   console.log("THIS IS PATIENT mmmmmm: "+ patient?.firstName);

          
         // var therapies: TherapyModel[] = store.getState().therapyReducer.therapy.filter((t)=>t.patientFirstName===patient?.firstName);
      //    var alltherapies: TherapyModel[] = store.getState().therapyReducer.therapy;

//console.log("THIS IS PATIENT mmmmmm: " +JSON.stringify( therapies));
//console.log("THIS IS PATIENT aaaaaa : " +JSON.stringify( alltherapies));



          
         },[patient])


         useEffect(() => {
          setTherapiesByPatientId(sortedFilteredTherapies);
      
         
          console.log("Updated therapiesByPatientId: ", sortedFilteredTherapies);
      }, [sortedFilteredTherapies]); // עדכן את ה-dependency array
      



     
         








         const toggleModal=()=>{
            setModal(!modal)
        }


    return (
        <div className="PatientDetails flex-cil-top-center">
        <h1>פרטי מטופל</h1>
        {/*
        
         <div className="details">
            <p>שם המטופל: {patient?.firstName} {patient?.lastName}</p>
            <p>גיל : {patient?.age} </p>
            <p>מקום מגורים: {patient?.city} </p>
            <p>טלפון: {patient?.phoneNumber} </p>
        </div>
        <div className="links">
            <Link to={`/createTherapy/${patient?.id}`}>קביעת טיפול</Link>
            <Link to={`/createVisit/${patient?.id}`}>ביקור</Link>
            <Link to={`/formPatient/${patient?.id}`}>טופס</Link>
            <Link to={`/modal/`}>רשימת טיפולים</Link>
      </div>
      <Modal/>
   
        */}
       

       <div className="patient-card">
 {/*

 <div className="header">
    <span className="reservation-id">Reservation ID #RSVA0011</span>
    <span className="manual-appointment">Manual Appointment</span>
  </div>
 */} 

  <div className="patient-info">
    {/*<div className="patient-avatar">CS</div>*/}
    <div className="patient-details title-full">
      <h2>{patient?.firstName} {patient?.lastName}</h2>
      <p>Status: <span className="status">Registered</span></p>
      <p>todo todo todo todo </p>
      <button className="edit-button">Edit</button>
    </div>
  </div>

  <div className="treatment-info">
    <div className="treatment">
      <p>טיפול אחרון</p>
      <span>Tooth filling</span>
    </div>
   {/*<div className="date-time">
      <p>Date and Time</p>
      <span>Fri, 24 Jun 02:00-03:00 PM</span>
    </div>*/}
    
    <div className="dentist">
      <p>טיפול הבא</p>
      <span>Drg Putri Larasati</span>
    </div>
  </div>

  <div className="payment-info">
    <span>Bill #10102</span>
    <span className="unpaid-status">UNPAID</span>
    <button className="send-reminder">Send Reminder</button>
  </div>

  <div className="general-info">
  <div className="info">
      <p>טלפון</p>
      <span>{patient?.phoneNumber}</span>
    </div>
    <div className="info">
      <p>שם מלא</p>
      <span>{patient?.firstName} {patient?.lastName}</span>
    </div>
    <div className="info">
      <p>מייל</p>
      <span>{patient?.mail}</span>
    </div>
    <div className="info">
      <p>כתובת</p>
      <span>{patient?.city}</span>
    </div>
  </div>

  <div className="action-buttons button-full">
    <Link to={`/createTherapy/${patient?.id}`}>
    <button className="edit-checkup">קביעת טיפול</button>

    
    </Link>
    <button className="add-record">Add Medical Record</button>
  </div>
</div>
   
        
        
    </div>




           


    );
}

export default PatientDetails;
