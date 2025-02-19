export class LoginModel{

    public token?: string;
    public userName?: string;
    public password?:string;

    public constructor(token?:string,userName?:string,password?:string){
        this.token=token;
        this.userName=userName;
        this.password=password;
    }


}