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
import CreateTherapy from "../CreateTherapy/CreateTherapy";
import CreateVisit from "../CreateVisit/CreateVisit";
import TherapyListByPatient from "../TherapyListByPatient/TherapyListByPatient";
import Login from "../Login/Login";
import { useState } from "react";
import FormPatient from "../FormPatient/FormPatient";
import WeeklyTable from "../WeeklyTable/WeeklyTable";
import ReadOnlyForm from "../ReadOnlyForm/ReadOnlyForm";
import Modal from "../Modal/Modal";
import PatientCard from "../PatientCard/PatientCard";

function Routing(): JSX.Element {

   

    return (
        <div className="Routing">
            <Routes>
               
               <Route path="/" element={<App/>}/>
               <Route path="/home" element={<Main/>}/>
               <Route index element={<HomePage/>}/>
               <Route path="/listTherapy" element={<ListTherapy/>}/>
               <Route path="/listPatients" element={<ListPatients/>}/>
              
              {/*<Route path="/patientDetails" element={<PatientDetails/>}/>*/}
               <Route path="/createPatient" element={<CreatePatient/>}/>
               <Route path="/dailySchedule" element={<DailySchedule/>}/>
               <Route path="/tableExamp" element={<TableExamp/>}/>
               <Route path="/listPatients/patientDetails/:id" element={<PatientDetails/>}/>
               <Route path="/createTherapy/:id" element={<CreateTherapy/>}/>
               <Route path="/createVisit/:id" element={<CreateVisit/>}/>
               <Route path="/therapyListByPatient/:id" element={<TherapyListByPatient/>}/>
               <Route path="/login" element={<Login />} />
               <Route path="/formPatient" element={<FormPatient/>}/>
               <Route path="/weeklyTable" element={<WeeklyTable/>}/>
               <Route path="/formPatient/:id" element={<FormPatient/>}/>
               <Route path="/readOnlyForm" element={<ReadOnlyForm/>}/>
               <Route path="/modal" element={<Modal/>}/>
               <Route path="/patientCard" element={<PatientCard/>}/>















              
   
                 </Routes>
			
        </div>
    );
}

export default Routing;
