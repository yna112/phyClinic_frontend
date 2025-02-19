import { useParams } from "react-router-dom";
import "./CreateVisit.css";
import { useEffect, useState } from "react";
import { PatientModel } from "../Models/PatientModel";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { VisitModel } from "../Models/VisitModel";
import web from "../Services/WebApi";


function CreateVisit(): JSX.Element {

    const params=useParams();
    const patientId=+(params.id||0);
    const[patient,setPatient]=useState<PatientModel>();
    console.log('PATIENT ID FOR VISIT: '+patient?.id)
    const[visit,setVisit]=useState<VisitModel>();



    const schema = yup.object().shape({

    })

    





       const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
          useForm<VisitModel>({ mode: "all", resolver: yupResolver(schema) });
    





          const createNewVisit=(visit:VisitModel)=>{
            console.log(visit.complaint)
                web.createNewVisitForPatient(visit,patientId)
                .then((res)=>{
                    setVisit(res.data)

                })
                .catch(()=>{
                    console.log('יצירת ביקור חדש לא הצליחה')
                })

          }



  
  
  
  
  
  
    return (
        <div className="CreateVisit flex-cil-top-center">
            <h1>-{patient?.firstName}יצירת ביקור חדש</h1>
            {patient?.firstName}

            <form onSubmit={handleSubmit(createNewVisit)}>
                <textarea {...register('complaint')}  placeholder="תלונה"/>
     
                <input {...register('date')} type="Date" placeholder="תאריך"/><br/><br/>
        
        
         <button>קביעת טיפול</button>

                



            </form>


        </div>
    );
}

export default CreateVisit;
