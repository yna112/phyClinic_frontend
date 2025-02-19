import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaListAlt, FaPlusCircle, FaUser, FaCalendarAlt } from 'react-icons/fa';
import './HomePage.css';
import backgroundImage from '../../assets/backgroundforhomepage.webp';
import web from "../Services/WebApi";
import store from "../../Redux/store";
import { patientslistAction } from "../../Redux/PatientAppState";
import { therapyListAction } from "../../Redux/TherapyAppState";



function HomePage() {
    const [patients,setPatients]=useState();
    const [therapies,setTherapies]=useState();
    const [myToken,setMyToken]=useState(store.getState().loginReducer.newUser.token);
    

    useEffect(()=>{
        console.log('TOKEN FROM HOMEPAGE: '+myToken)
        web.getAllPatients()
         .then((res)=>{
             setPatients(res.data)
             store.dispatch(patientslistAction(res.data))
             
             console.log("Patients data:", res.data); // הדפסת כל הנתונים המתקבלים מהשרת
 
          })
         .catch(()=>{
             console.log(" לא הצליח להביא את המטופלים")
         })

         web.getAllTherapies()
         .then((res)=>{
             setTherapies(res.data)
             store.dispatch(therapyListAction(res.data))
             
 
          })
         .catch(()=>{
             console.log(" לא הצליח להביא את רשימת הטיפולים")
         })
         
         },[]);


    return (
        <div className="HomePage" >
           <div className="links">
    <div className="link-row">
        <Link to="listPatients"><FaListAlt /> רשימת פציינטים</Link>
        <Link to="createPatient"><FaPlusCircle /> יצירת פציינט</Link>
    </div>
    <div className="link-row">
        <Link to="patientDetails"><FaUser /> פרטי פציינט</Link>
        <Link to="therapyScheduling"><FaCalendarAlt /> קביעת טיפול</Link>
    </div>
    <div className="link-row">
        <Link to="login">התחברות</Link>
        <Link to="formPatient">טופס פיזיוטרפיה</Link>
        <Link to="patientCard">דוגמא לכרטיס מטופל </Link>

    </div>
    <div className="link-row">
        <Link to="weeklyTable">לוח זמנים שבועי</Link>
        <Link to="stamWeekle">סתם לוח זמנים</Link>
        <Link to="readOnlyForm">טופס לקריאה</Link>

    </div>
</div>
            <div className="schedule">
               {/* <h2>סדר היום</h2>
                <table>
                    <thead>
                        <tr>
                            <th>שעה</th>
                            <th>פציינט</th>
                            <th>סוג טיפול</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((row, index) => (
                            <tr key={index}>
                                <td>{row.time}</td>
                                <td>{row.patient}</td>
                                <td>{row.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>*/}
            </div>
        </div>
    );
}

export default HomePage;
