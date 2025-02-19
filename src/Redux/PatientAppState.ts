import { PatientModel } from "../Components/Models/PatientModel";
import { TherapyModel } from "../Components/Models/TherapyModel";
import { VisitModel } from "../Components/Models/VisitModel";

export class PatientAppState{

   public patients:PatientModel[]=[];
   public visit:VisitModel[]=[];
   public therapy:TherapyModel[]=[];

}



export enum PatientActionType{
    patientsList="patientsList",
    addPatient="addPatient",
    getPatientById="getPatientById",
    createNewVisitByPatientId="createNewVisitByPatientId"
}


export interface PatientAction{
    type:PatientActionType;
    payload:any;

}



export function patientslistAction(patients:PatientModel[]):PatientAction{
    return {type:PatientActionType.patientsList,payload:patients};
}



export function addPatientAction(patient:PatientModel):PatientAction{
    return {type:PatientActionType.addPatient,payload:patient}
}



export function getPatientById(patientId:number):PatientAction{
    return {type:PatientActionType.getPatientById,payload:patientId}
}



export function patientReducer(currentState: PatientAppState=new PatientAppState(),action:PatientAction):PatientAppState{

const newState={...currentState}


switch(action.type){
    case PatientActionType.patientsList:
        newState.patients=action.payload;
        break;

    case PatientActionType.addPatient:
        newState.patients.push(action.payload);
        break;

    case PatientActionType.getPatientById:
        newState.patients=newState.patients.filter(p=>p.id==action.payload);
        break;

}


return newState;

}