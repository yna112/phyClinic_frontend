import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import App from "../../App";
import Main from "../Main/Main";
import HomePage from "../HomePage/HomePage";
import Home from "../Home/Home";
import ListTherapy from "../ListTherapy/ListTherapy";
import ListPatients from "../ListPatients/ListPatients";
import PatientDetails from "../PatientDetails/PatientDetails";
import CreatePatient from "../CreatePatient/CreatePatient";
import DailySchedule from "../DailySchedule/DailySchedule";
import TableExamp from "../TableExamp/TableExamp";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
               
               <Route path="/" element={<App/>}/>
               <Route path="/home" element={<Main/>}/>
               <Route index element={<HomePage/>}/>
               <Route path="/listTherapy" element={<ListTherapy/>}/>
               <Route path="/listPatients" element={<ListPatients/>}/>
               <Route path="/patientDetails" element={<PatientDetails/>}/>
               <Route path="/createPatient" element={<CreatePatient/>}/>
               <Route path="/dailySchedule" element={<DailySchedule/>}/>
               <Route path="/tableExamp" element={<TableExamp/>}/>


              
   
                 </Routes>
			
        </div>
    );
}

export default Routing;
