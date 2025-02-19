
export class TherapyModel{

    public id?:number;
    public therapyName?:string;
    public date?:Date;
    public time?:string;
    public patientId?:number;
    public patientFirstName?:string;
    public patientLastName?:string;


    public constructor(id?:number,therapyName?:string,date?:Date,time?:string,patientId?:number,patientFirstName?:string,patientLastName?:string){
        this.id=id;
        this.therapyName=therapyName;
        this.date=date;
        this.time=time;
        this.patientId=patientId;
        this.patientFirstName=patientFirstName;
        this.patientLastName=this.patientLastName;
    }
}