import { PatientFormModel } from './../Models/PatientFormModel';
import { Global } from '@emotion/react';
import { PatientModel } from './../Models/PatientModel';
import globals from "./globals";
import { promises } from 'dns';
import axios from 'axios';
import { TherapyModel } from '../Models/TherapyModel';
import { VisitModel } from '../Models/VisitModel';
import { LoginModel } from '../Models/LoginModel';
import store from '../../Redux/store';
import tokenAxios from './InterceporAxios';


class WebApi{

    private patient=globals.urls.patient;
    private therapy=globals.urls.therapy;


        public async login(userName:string,password:string):Promise<any>{
         return await axios.post<LoginModel>(this.patient+'/login?userName='+userName+'&password='+password)
        }

        public async getAllPatients():Promise<any>{

        return await tokenAxios.get<PatientModel[]>(this.patient+'/getAllPatients')

        }


          public async createNewPatient(patient:PatientModel):Promise<any>{
            return await tokenAxios.post<PatientModel>(this.patient+'/addPatient',patient)
         }


         public async getPatientById(patientId:number):Promise<any>{
            return axios.get<PatientModel>(this.patient+'/getPatientById/'+ patientId)
         }
        

         public async createTherapyForPatient(therapy:TherapyModel,patientId:number):Promise<any>{
            return axios.post<TherapyModel>(this.therapy+'/addTherapy'+patientId,therapy)
         }


         public async createNewVisitForPatient(visit:VisitModel,patientId:number):Promise<any>{
            return axios.post<VisitModel>(this.patient+'/createNewVisit'+patientId,visit)
         }


         public async getTherapiesByPatient(patientId:number):Promise<any>{
            return axios.get<TherapyModel[]>(this.therapy+'/getTherapiesByPatient'+patientId)
         } 
     

         public async getAllTherapies():Promise<any>{
            return axios.get<TherapyModel[]>(this.therapy+'/getAllTherapies')
         }

         public async createFormForPatient(patientForm:PatientFormModel,patientId:number):Promise<any>{
            return axios.post<PatientFormModel>(this.patient+'/createFormPatient'+patientId,patientForm)
         }




}
const web=new WebApi();
export default web;