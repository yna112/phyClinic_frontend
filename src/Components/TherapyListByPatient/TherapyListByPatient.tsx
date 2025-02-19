import { useParams } from "react-router-dom";
import "./TherapyListByPatient.css";
import { useEffect, useState } from "react";
import { PatientModel } from "../Models/PatientModel";
import { TherapyModel } from "../Models/TherapyModel";
import web from "../Services/WebApi";

function TherapyListByPatient(): JSX.Element {

    const params=useParams();
    const patientId=+(params.id||0);
    const[patient,setPatient]=useState<PatientModel>();
    const[therapies,setTherapies]=useState<TherapyModel[]>();


  useEffect(()=>{
        web.getTherapiesByPatient(patientId)
        .then((res)=>{
            setTherapies(res.data)
            console.log(res.data);


        })
        .catch(()=>{
                console.log('לא הצליח')
        })
        
      
         },[]);

    



    return (
        <div className="TherapyListByPatient flex-cil-top-center">
            <h1>רשימת טיפולים לפי מטופל</h1>
			
        </div>
    );
}

export default TherapyListByPatient;
