import "./CreatePatient.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { PatientModel } from "../Models/PatientModel";
import web from "../Services/WebApi";
import { Link, useNavigate } from "react-router-dom";
import store from "../../Redux/store";
import { addPatientAction } from "../../Redux/PatientAppState";

function CreatePatient(): JSX.Element {

   const[newPatient,setNewPatient]=useState<PatientModel>();
   const navigate=useNavigate();


   
   const schema=yup.object().shape({
    


   })
   
   
   const createNewPatient=(patient:PatientModel)=>{
    web.createNewPatient(patient)
    .then((res)=>{
        console.log('הצליח')
        store.dispatch(addPatientAction(patient))
        navigate('/listPatients')

    })
    .catch(()=>{
        console.log('לא הצליח')


    })

   }
   
   
   const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
         useForm<PatientModel>({ mode: "all", resolver: yupResolver(schema) });
   
    
    return (
        <div className="CreatePatient flex-cil-top-center">
			<h1>יצירת מטופל</h1>
            <form onSubmit={handleSubmit(createNewPatient)}>
                <input {...register('firstName')} type="text" placeholder="שם פרטי"/><br/>
                <input {...register('lastName')} type="text" placeholder="שם משפחה"/><br/>
                <input {...register('phoneNumber')} type="text" placeholder="טלפון"/><br/>
                <input {...register('city')} type="text" placeholder="מקום מגורים"/><br/>
                <input {...register('mail')} type="text" placeholder="מייל"/><br/>
                

                <button>יצירת מטופל</button>

                



            </form>

        </div>
    );
}

export default CreatePatient;
