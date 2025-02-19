import { Outlet, useLocation } from "react-router-dom";
import Routing from "../Routing/Routing";
import "./Main.css";
import Login from "../Login/Login";

function Main(): JSX.Element {
  
    const location=useLocation();

    let className="Main"

    if(location.pathname==="/login"){
        className += "Shugul flex-cil-top-center";

    }


    return (
        <div className={className}>
			 <Routing/>
                <Outlet/>

        </div>
    );
}

export default Main;
