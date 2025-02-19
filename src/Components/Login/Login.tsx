import "./Login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { LoginModel } from "../Models/LoginModel";
import web from "../Services/WebApi";
import store from "../../Redux/store";
import { loginAction } from "../../Redux/AutoReduxState";
import { useNavigate } from "react-router-dom";


function Login(): JSX.Element {

    const nevigate=useNavigate();

    const schema=yup.object().shape({

    })
    
    
    
    
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
    useForm<LoginModel>({ mode: "all", resolver: yupResolver(schema) });
    
    
    
    const loginAdmin=(newLogin:LoginModel)=>{
        
        const tempLoginModelp=new LoginModel();
        
        tempLoginModelp.password=newLogin.password ||'';
        tempLoginModelp.userName=newLogin.userName ||'';

    
        

    
    
        web.login(tempLoginModelp.userName,tempLoginModelp.password)
        .then((res)=>{
            //const tokenToString=JSON.stringify(res.data)
            store.dispatch(loginAction(res.data))
            const tokenToString=JSON.stringify(store.getState().loginReducer.newUser.token)

            console.log('TOKEN FROM STATE: '+store.getState().loginReducer.newUser.token?.length)
            console.log('LOGIN DATA: '+res.data+typeof(res.data))
            nevigate('/')
    
        })
        .catch(()=>{
            console.log('לא הצלחתי לעשות לוגין')
    
        })
    
    }
    
    
    return (
        <div className="Login">
            <div className="login-container ">
                <form onSubmit={handleSubmit(loginAdmin)}>
                    <input {...register('userName')} type="text" placeholder="שם משתמש" />
                    <input {...register('password')} type="password" placeholder="סיסמא" />
                    <input type="submit" value="כניסה" />
                </form>
               
             
            </div>
        </div>
    );
}

export default Login;
