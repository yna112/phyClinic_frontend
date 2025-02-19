import { number } from "yup";
import { TherapyModel } from "./TherapyModel";


export class PatientModel{

    public id?:number;
    public firstName?:string;
    public lastName?:string;
    public city?:string;
    public mail?:string;
    public phoneNumber?:string;
    public dateOfBirth?:Date;
    public height?:number;
    public weight?:number;
    public age?:number;
    public therapyList?:TherapyModel[];


    public constructor(id?:number,firstName?:string,lastName?:string,city?:string,mail?:string,phoneNumber?:string,dateOfBirth?:Date,height?:number,weight?:number,age?:number,therapyList?:TherapyModel[]){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.city=city;
        this.mail=mail;
        this.phoneNumber=phoneNumber;
        this.dateOfBirth=dateOfBirth;
        this.height=height;
        this.weight=weight;
        this.age=age;
        this.therapyList=therapyList;
       
    }
}