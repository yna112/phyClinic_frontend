import { useEffect, useState } from "react";
import "./ListPatients.css";
import { PatientModel } from "../Models/PatientModel";
import web from "../Services/WebApi";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";
import { RiHome7Fill, RiHome7Line ,RiContactsFill} from "react-icons/ri";
import store from "../../Redux/store";





function ListPatients(): JSX.Element {

    const[patients,setPatients]=useState<PatientModel[]>([])
    const [filteredPatients, setFilteredPatients] = useState<PatientModel[]>([]);
    const[currentPage,setCurrentPage]=useState(0);
    const[forSearch,setForSearch]=useState("")
    console.log("PATIENTS: "+patients);

    const recordsPerPage = 10;

    const totalPages=Math.ceil(patients.length/recordsPerPage);

    
    const handleNext=()=>{
      if(currentPage<totalPages-1){
        console.log(currentPage)
        setCurrentPage(currentPage+1);
        currentDisplay(currentPage+1);




      }
     }


    
    const handlePrevious = () => {
      if(currentPage>0){
      setCurrentPage(currentPage-1);
      //setFilteredPatients(currentDisplay());
      currentDisplay(currentPage-1);

      
      }
     }
    

     const currentDisplay=(pageNumber:number):PatientModel[] =>{
      const newDisplay=patients.slice(pageNumber*recordsPerPage,(pageNumber+1)*recordsPerPage)
      setFilteredPatients(newDisplay);
      return newDisplay;       

     }

   


    const handleSearch=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const searchValue = event.target.value;
        setForSearch(searchValue);
        if(searchValue===""){
        setFilteredPatients(currentDisplay(currentPage));
            
        }
        else{
            const res=patients.filter((item)=>item.firstName?.includes(forSearch))
        setFilteredPatients(res)

        }
        

}

    const displayList=()=>{

     setPatients((patients.filter((item)=>item.firstName?.includes(forSearch))))

    }

    
  
    useEffect(()=>{
      setPatients(store.getState().patientReducer.patients)
      setFilteredPatients(patients);
      console.log("CUURENT PAGE: "+currentPage)
      },[]);
     



      useEffect(() => {
        currentDisplay(currentPage);
      }, [patients, currentPage]);
  
      return (
        <div className="ListPatients flex-cil-top-center">
           <div className="home-icon">
         {/*<Link to="/"><RiHome7Fill/> </Link>*/}
         </div>
            <div className="wrap-table100 "> 
            <input type="text" placeholder="חפש שם" value={forSearch} onChange={handleSearch}/>

                {patients.length>0?(
                    <table>
                           <thead>
            <tr>
              <th></th>
              <th>מזהה</th>
              <th>שם</th>
              <th>טלפון</th>
              <th>מייל</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient,index)=>(
                <tr key={index}>
                  <td><Link to={`patientDetails/${patient.id}`}><RiContactsFill />

                  </Link></td>

                    <td>{patient.id}</td>
                    <td>{patient.firstName} {patient.lastName}</td>
                    <td>{patient.phoneNumber}</td>
                  <td><a href={`mailto:${patient.mail}`}>{patient.mail}</a></td>

                </tr>
                
            ))}
          </tbody>
                    </table>

                ):(<></>)}
                 <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 0}>
          חזור
        </button>
        <span>
          עמוד {currentPage + 1} מתוך {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages - 1}>
        הבא

        </button>
      </div>
                    
                       
</div>
</div>

          
           
			
    );
}

export default ListPatients;
