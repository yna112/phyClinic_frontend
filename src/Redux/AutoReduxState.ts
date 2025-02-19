import axios from "axios";
import { LoginModel } from "../Components/Models/LoginModel";

export class AutoReduxState{
   
    public newUser:LoginModel=new LoginModel();

    public constructor(){

        try{
            const currentUser=JSON.parse(localStorage.getItem('newUser')||"")
            if(currentUser){
                console.log('יש נתונים בסטייט'+currentUser)
                this.newUser=currentUser;
            }}
        catch{
            console.log('אין  נתונים בסטייט')

            this.newUser.token='';
            this.newUser.password='';
            this.newUser.userName=''

        }
   
    }
}


export enum LoginActionType{

    Login="Login",
    Logout="Logout",

}


export interface LoginAction{

    type:LoginActionType;
    payload?:any;

}


export function loginAction(newUser:LoginModel):LoginAction{
    console.log('המטודה של הסטייט: '+newUser)
    return{type:LoginActionType.Login,payload:newUser}
}


export function logoutAction():LoginAction{
    return{type:LoginActionType.Logout}
}


export function loginReducer(currentState:AutoReduxState=new AutoReduxState(),action:LoginAction):AutoReduxState{

    const newState={...currentState}

    switch(action.type){
        case LoginActionType.Login:
            console.log('NEWSTATE PAYLOAD!!!@#@##@!: '+action.payload)

            newState.newUser=action.payload;
            localStorage.setItem('newUser',JSON.stringify(newState.newUser))
            break;

        case LoginActionType.Logout:
            newState.newUser.token='';
            newState.newUser.userName='';
            localStorage.removeItem('newUser');
            break;
    }


    return newState;
}