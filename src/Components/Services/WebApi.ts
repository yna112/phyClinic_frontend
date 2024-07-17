import { Global } from '@emotion/react';
import { PatientModel } from './../Models/PatientModel';
import globals from "./globals";
import { promises } from 'dns';
import axios from 'axios';


class WebApi{

    private patient=globals.urls.patient;


        public async getAllPatients():Promise<any>{
        return await axios.get<PatientModel[]>(this.patient+'/getAllPatients')
    }


 
     




}
const web=new WebApi();
export default web;