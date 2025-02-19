import { useParams } from "react-router-dom";
import "./CreateTherapy.css";
import { useEffect, useState } from "react";
import { PatientModel } from "../Models/PatientModel";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TherapyModel } from "../Models/TherapyModel";
import web from "../Services/WebApi";
import store from "../../Redux/store";
import { ForWeeklyRenderModel } from "../Models/ForWeeklyRenderModel";


function CreateTherapy(): JSX.Element {
   
    const params=useParams();
    const patientId=+(params.id||0);
    const[patient,setPatient]=useState<PatientModel>(store.getState().patientReducer.patients.filter((p)=>p.id===patientId)[0]);
    console.log("ppppppoooooooooooooo"+patient.firstName)
    const[patientName,setPatientName]=useState<string>();
    console.log('PATIENTID: '+patientId);






    const schema=yup.object().shape({

    })

    



       const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
          useForm<TherapyModel>({ mode: "all", resolver: yupResolver(schema) });
    


        const createTherapy=(therapy:TherapyModel)=>{
        

            web.createTherapyForPatient(therapy,patientId)
            .then((res)=>{
                console.log('הצליח')
             

               


            })
            .catch(()=>{
                console.log('לא הצליח')


            })
         }

        {/*
             
        useEffect(()=>{

            web.getPatientById(patientId)
             .then((res)=>{
                setPatient(res.data)
                 
                 console.log("Patients data:", res.data); // הדפסת כל הנתונים המתקבלים מהשרת
     
              })
             .catch(()=>{
                 console.log(" לא הצליח להביא את מטופל")
             })

             console.log("PPPPPPPPPPPPPP"+patient)
             
             },[]);
            
            */

        } 
       

        const createForWeeklyRenderModel=(therapy:TherapyModel)=>{
        

        }
      
   
   
   
   
    return (
        <div className="CreateTherapy flex-cil-top-center">
            <span>
            <h1>קביעת טיפול - {patient?.firstName} {patient?.lastName}</h1>
            </span>

            <form onSubmit={handleSubmit(createTherapy)}>
                <input {...register('therapyName')} type="text" placeholder="סוג הטיפול"/><br/>
                <input {...register('date')} type="Date" placeholder="תאריך"/><br/><br/>
                <input {...register('time')} type="time" placeholder="שעה"/><br/>
        
        
         <button>קביעת טיפול</button>

                



            </form>
			
        </div>
    );
}

export default CreateTherapy;
