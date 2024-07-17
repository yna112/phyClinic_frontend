import { number } from "yup";


export class PatientModel{

    public id?:number;
    public firstName?:string;
    public lastName?:string;
    public city?:string;
    public email?:string;
    public phoneNumber?:string;
    public dateOfBirth?:Date;
    public height?:number;
    public weight?:number;
    public age?:number;


    public constructor(id?:number,firstName?:string,lastName?:string,city?:string,email?:string,phoneNumber?:string,dateOfBirth?:Date,height?:number,weight?:number,age?:number){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.city=city;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.dateOfBirth=dateOfBirth;
        this.height=height;
        this.weight=weight;
        this.age=age;
       
    }
}