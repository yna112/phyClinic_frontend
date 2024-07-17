import { useEffect, useState } from "react";
import "./ListPatients.css";
import { PatientModel } from "../Models/PatientModel";
import web from "../Services/WebApi";

function ListPatients(): JSX.Element {

    const[patients,setPatients]=useState<PatientModel[]>([])


    useEffect(()=>{
       
        web.getAllPatients()
        .then((res)=>{
            setPatients(res.data)
         })
        .catch(()=>{
            console.log("לא הצליח")

        })
        

},[])

    return (
        <div className="ListPatients flex-cil-top-center">
            <h1>רשימת מטופלים</h1>
            <div className="wrap-table100"> 
                        <div className="table">
                        <div className="row header">



                        <div className="cell">
                Email
                    </div>
                        <div className="cell">
                 עיר מגורים
                    </div>
                    <div className="cell">
                 שם מלא
                    </div>
                        <div className="cell">
                ID
                    </div>
                        </div>
                            {patients.map(item=>{
                             return(
                                    <div className="row" key={item.id}>
                                    <div className="cell" typeof="email" data-title="שם מלא">
                                 <a href={`mailto/${item.email}`}>{item.email}</a>
            
                                     </div>
                                        <div className="cell" data-title="ID">
                                        {item.city}
                                        </div>

                                        <div className="cell" data-title="עיר מגורים">

                                        {<p>{item.firstName} {item.lastName}</p>}
                                        </div>
                                            <div className="cell" data-title="Location">
                                            {item.id}
                                            </div>
                                            </div>
                                                    )
                                                    })}
</div>
</div>

          
           
			
        </div>
    );
}

export default ListPatients;
