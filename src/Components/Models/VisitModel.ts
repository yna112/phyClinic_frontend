import { StructuredType } from "typescript";

export class VisitModel{

     id?:number;
     date?:Date;
     complaint?:string;
     schedulingAnAppointment?:string;

    


    public constructor(id?:number,date?:Date,complaint?:string,schedulingAnAppointment?:string){
        this.id=id;
        this.date=date;
        this.complaint=complaint;
        this.schedulingAnAppointment=schedulingAnAppointment;
    }
}