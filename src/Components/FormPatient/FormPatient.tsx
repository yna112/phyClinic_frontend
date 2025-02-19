import { useParams } from "react-router-dom";
import "./FormPatient.css";
import { PatientModel } from "../Models/PatientModel";
import { useEffect, useState } from "react";
import store from "../../Redux/store";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PatientFormModel } from "../Models/PatientFormModel";
import web from "../Services/WebApi";


function FormPatient(): JSX.Element {

    const params=useParams();
    const patientId=+(params.id||0);
    console.log(typeof(patientId))
    const[patient,setPatient]=useState<PatientModel| undefined>()
    const[myForm,setMyForm]=useState<PatientFormModel>()
    const [tempFirstName,setTempFirstName]=useState<any>("");
    const [tempLastName,setTempLastName]=useState<any>("");
    const [tempPhoneNumber,setPhoneNumber]=useState<any>("");
    const [tempCity,setTempCity]=useState<any>("");
    const [tempMail,setTempMail]=useState<any>("");
    const [tempGenderMen,setTempGenderMen]=useState<boolean>(true);



    useEffect(()=>{
        setPatient(store.getState().patientReducer.patients.filter((p)=>p.id===patientId)[0])
        setTempFirstName(patient?.firstName)
        setTempLastName(patient?.lastName)
        setPhoneNumber(patient?.phoneNumber)
        setTempMail(patient?.mail)
        setTempCity(patient?.city)

    })

    const handleChangeGender=(event: React.ChangeEvent<HTMLInputElement>)=>{
         var theGender=event.target.value;
        console.log(theGender);
        (theGender==='female'?setTempGenderMen(false):setTempGenderMen(true))

    }



    const schema=yup.object().shape({

    })
     
    
    
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
          useForm<PatientFormModel>({ mode: "all", resolver: yupResolver(schema) });
    


          const createPatientForm=(patientForm:PatientFormModel)=>{
            web.createFormForPatient(patientForm,patientId)
            .then((res)=>{
                setMyForm(res.data)
                console.log(myForm)

            })
            .catch(()=>{

            })

          }
    
    


    




    
    return (
        <div className="FormPatient flex-cil-top-center">
            <h1>טופס מילוי פיזיותרפיה</h1>
            <form className="physiotherapy-form" onSubmit={handleSubmit(createPatientForm)}>
                <div className="form-section">
                    <h2>פרטים אישיים</h2>
                    <div className="form-row">
                        <div className="form-group small-input">
                            <label>שם פרטי:</label>
                            <input type="text" name="firstName" value={tempFirstName} readOnly/>
                        </div>
                        <div className="form-group small-input">
                            <label>שם משפחה:</label>
                            <input type="text" name="lastName"  value={tempLastName} readOnly/>
                        </div>
                        <div className="form-group small-input">
                            <label>טלפון:</label>
                            <input type="tel" name="phone" value={tempPhoneNumber} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group small-input">
                            <label>מייל:</label>
                            <input type="email" name="email" value={tempMail} readOnly />
                        </div>
                        <div className="form-group small-input">
                            <label>עיר:</label>
                            <input type="text" name="city" value={tempCity}/>
                        </div>
                        <div className="form-group small-input">
                            <label>כתובת:</label>
                            <input {...register('address')} type="text" name="address" />
                        </div>
                    </div>
                </div>

                <hr className="form-separator" />

                <div className="form-section">
                    <h2>פרטי גוף</h2>
                    <div className="form-row">
                        <div className="gender-radio-group">
                            <label>מין:</label>
                            <div className="gender-radio-options">
                                <input {...register('gender')} type="radio" name="gender" value="male" id="male" onChange={handleChangeGender} />
                                <label htmlFor="male">זכר</label>
                                <input {...register('gender')} type="radio" name="gender" value="female" id="female" onChange={handleChangeGender}/>
                                <label htmlFor="female">נקבה</label>
                            </div>
                        </div>
                        <div className="bodyDetailes">
                            <label>משקל (ק"ג):</label>
                            <input {...register('weight')} type="number" name="weight" />
                        </div>
                        <div className="bodyDetailes">
                            <label>גובה (ס"מ):</label>
                            <input {...register('height')} type="number" name="height" />
                        </div>
                    </div>
                </div>

                <hr className="form-separator" />

                <div className="form-section">
                    <h2>פרטי ביטוח</h2>
                    <div className="form-row">
                        <div className="form-group small-input">
                            <label>עיסוק / תפקיד:</label>
                            <input {...register('occupation')} type="text" name="occupation" />
                        </div>
                        <div className="form-group small-input">
                            <label>האם יש לך ביטוח?</label>
                            <select  {...register('hasInsurance')}name="hasInsurance" className="small-select">
                            <option  value="yes" id="yes">כן</option>
                            <option  value="no" id="no">לא</option>

                                <option value="notApplicable">לא חל</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group small-input">
                        <label>שם חברת הביטוח:</label>
                        <input {...register('insuranceCompanyName')} type="text" name="insuranceCompanyName" />
                    </div>
                    <div className="form-group">
                        <div className="date-group">
                        <label>תאריך תפוגה:</label>
                        <input {...register('insuranceExpiryDate')} type="date" name="insuranceExpiryDate" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>סוג הכיסוי:</label>
                        <input {...register('insuranceCoverageType')} type="text" name="typeOfCoverage" />
                    </div>
                </div>

                <hr className="form-separator" />

                <div className="form-section">
                    <h2>פרטים רפואיים</h2>
                    <div className="form-group small-input">
                        <label>האם אתה עוסק בפעילות גופנית?</label>
                        <select {...register('isPhysicallyActive')} name="isPhysicallyActive">
                            <option value="yes" id="yes">כן</option>
                            <option  value="no" id="no">לא</option>
                            <option value="notApplicable">לא חל</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>מדוע אתה פונה לפיזיותרפיה?</label>
                        <textarea {...register('reasonForPhysiotherapy')} name="reasonForPhysiotherapy"></textarea>
                    </div>
                    <div className="form-group">
                        <label>תלונה עיקרית:</label>
                        <textarea {...register('mainComplaint')}name="mainComplaint"></textarea>
                    </div>
                    <div className="form-group">
                        <label>תלונה משנית:</label>
                        <textarea {...register('secondaryComplaint')} name="secondaryComplaint"></textarea>
                    </div>
                    <div className="form-group">
                        <label>כמה זמן אתה חווה כאב?</label>
                        <textarea {...register('painDuration')}name="painDuration"></textarea>
                    </div>

                    {!tempGenderMen &&(
                             <div className="form-group small-input" >
                             <label>האם את בהריון?</label>
                             <select {...register('isPregnant')} name="isPregnant">
                             <option value="notApplicable">לא חל</option>
                                 <option  value="yes" id="yes">כן</option>
                                 <option value="no" id="no">לא</option>
                             </select>
                         </div>

                    )}
               
                    {/*<div className="form-group small-input">
                        <label>שבוע בהריון:</label>
                        <input  type="text" name="week" />
                    </div>*/}

                    {!tempGenderMen &&(
                             <div className="form-group small-input">
                             <label >האם את מניקה?</label>
                             <select {...register('isBreastfeeding')} name="isBreastfeeding">
                                 <option value="notApplicable">לא חל</option>
                                  <option value="yes">כן</option>
                                 <option value="no">לא</option>
                             </select>
                         </div>

                    )}
               
                </div>

                <hr className="form-separator" />

                <div className="form-section">
                    <h2>רמת כאב</h2>
                    <div className="form-group">
                        <label>דרג את רמת הכאב מ-1 עד 10:</label>
                        <div className="pain-scale">
                            {Array.from(Array(10).keys()).map((i) => (
                                <label key={i + 1}>
                                    <input {...register('painLevel')} type="radio" name="painLevel" value={i + 1} />
                                    {i + 1}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <button type="submit">שלח</button>
            </form>
        </div>
    );
}

export default FormPatient;
