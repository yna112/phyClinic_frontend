import { useEffect, useState } from "react";
import "./WeeklyTable.css";
import store from "../../Redux/store";
import { TherapyModel } from "../Models/TherapyModel";
import { PatientModel } from "../Models/PatientModel";
import { stringify } from "querystring";
import { json } from "stream/consumers";
import { number } from "yup";
import { HiArrowNarrowRight, HiBadgeCheck } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";



function WeeklyTable(): JSX.Element {
    // סטייטים לניהול המידע
    const [allTherapies, setTherapies] = useState<TherapyModel[]>(store.getState().therapyReducer.therapy);
    const [allPatients,setAllPatients] = useState<PatientModel[]>(store.getState().patientReducer.patients)
    const [weekDates, setWeekDates] = useState<string[]>([]);
    const [timeTherapy, setTimeTherapy] = useState<string[]>([
        "09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00"
    ]);
    const [patientName,setPatientName]=useState<any>();
    const [therapiesByDates, setTherapiesByDates] = useState<TherapyModel[]>([]);


    const[mapByName,setMapByName]=useState<Record<number , string>>({});
    const [day,setDay]=useState<any>(0);


    const[newTherapy,setNewTherapy]=useState<TherapyModel[]>(allTherapies.filter((t)=>t.id===14));
    const [selectedTherapyIds, setSelectedTherapyIds] = useState<any>();
    




    // הגדרת ימות השבוע כ- tuple
     const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday'] as const;

    // טיפוס המייצג את ימות השבוע
    type WeekDays = typeof weekDays[number];
  

    // סטייטים לכל יום עם חלוקה לפי שעה
    const [therapiesByDayAndTime, setTherapiesByDayAndTime] = useState<Record<WeekDays, Record<string, TherapyModel[]>>>({
        sunday: {},
        monday: {},
        tuesday: {},
        wednesday: {},
        thursday: {},
    });

 


    const therapiesByDateAndTime: Record<WeekDays, Record<string, TherapyModel[]>> = {
        sunday: {},
        monday: {},
        tuesday: {},
        wednesday: {},
        thursday: {}
    
    };

    const [tempTherapiesByDayAndTime, settempTherapiesByDayAndTime] = useState<any>({
        sunday: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
    });

    const addTherapiesByDate = () => {
        const updatedTherapiesByDayAndTime = { ...tempTherapiesByDayAndTime }; 
        const keys = Object.keys(updatedTherapiesByDayAndTime);
        
        keys.forEach((key) => {
    
            const therapiesForKey = allTherapies.filter((therapy) => {
                if (therapy.date && therapy.time) {
                    const tempDate = new Date(therapy.date);
                    const therapyDateForString = tempDate.toLocaleDateString("he-il", {
                        day: "2-digit",
                        month: "2-digit"
                    });
    
                    console.log("THE KEY DATE: " + key);
                    console.log("THE THERAPY DATE: " + therapyDateForString);
                    
                    return key === therapyDateForString; // החזר true אם התאריך מתאים
                }
                return false; // החזר false אם אין תאריך או זמן
            });
    
            // אם יש טיפולים מתאימים, נשמור אותם
            updatedTherapiesByDayAndTime[key] = therapiesForKey; // עדכון המערך עם הטיפולים המתאימים
        });
    
        settempTherapiesByDayAndTime(updatedTherapiesByDayAndTime); // עדכון ה-state
        console.log('FROM STATE: ' + JSON.stringify(updatedTherapiesByDayAndTime)); // הראה את המידע מעודכן
    };
    
      


    useEffect(()=>{
        addTherapiesByDate();

    },[weekDates])


    const updateTherapiesList=(tempDay:number)=>{
        tempDay=day;
        const myUpdateDate=new Date()
        myUpdateDate.setDate(myUpdateDate.getDate() + tempDay);       

        allTherapies.filter((t)=>{
            const myUpdateDateForTherapy = t.date ? new Date(t.date) : undefined;

            if (myUpdateDateForTherapy && myUpdateDateForTherapy >= myUpdateDate) {
                
                therapiesByDates.push(t)

              }


        })
        setTherapies(therapiesByDates)
    }


    //פונקציה שהופכת את הזמן מסטרינג לדייט

    const fromStringDateTimeToDate=(stringTime:string):Date=>{

        const [hours,minute]=stringTime.split(":").map(Number);
        const date=new Date();
        date.setHours(hours,minute,0,0)
        return date;
    }


 


  //התאמה בין התאריך של הטיפול לבין התאריך של הטבלה
 const matchingTheTherapiesDateAndTimeToTable = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + day);

    allTherapies.forEach((therapy) => {
        if (therapy.date && therapy.time) {
            const myTempTherapyDate = new Date(therapy.date);
            const dateAsStringFromTherapy = myTempTherapyDate.toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit" });
            const dayOfWeek = myTempTherapyDate.getDay(); 
            const dateOfDayOfWeek = weekDates[dayOfWeek];  
            
            // השוואה אם התאריכים תואמים
            
            if (dayOfWeek >= 0 && dayOfWeek < weekDays.length && dateOfDayOfWeek === dateAsStringFromTherapy) {
                const dayKey: WeekDays = weekDays[dayOfWeek];
                const therapyTime: string = therapy.time;
                

                // בדיקה אם המפתח של היום קיים, אחרת אתחול
                if (!therapiesByDateAndTime[dayKey]) {
                    therapiesByDateAndTime[dayKey] = {};
                }

                const timeFromTherapy = fromStringDateTimeToDate(therapy.time);
               // let added = false; // דגל לעקוב אם הטיפול נוסף

                for (let i = 0; i < timeTherapy.length - 1; i++) {
                    const timeStateForSlice=timeTherapy[i].slice(0,2)
                    const timeFromTherapyTemp=therapyTime.slice(0,2)
                    if(!(timeStateForSlice===timeFromTherapyTemp)){
                        therapiesByDateAndTime[dayKey][therapyTime] = [];

                        
                    }
                   // therapiesByDateAndTime[dayKey][therapyTime].push(therapy);

                    
}

                // אם לא נוסף שום טיפול, יש לאתחל את המערך ולהוסיף אותו בסוף
                
                    if (!therapiesByDateAndTime[dayKey][therapyTime]) {
                        therapiesByDateAndTime[dayKey][therapyTime] = [];
                    }
                    therapiesByDateAndTime[dayKey][therapyTime].push(therapy);
                
            }
        }
    });
};




    // פונקציה שמחשבת את תאריכי השבוע הנוכחי

    const getWeekDates = (tempDay:number) => {
        tempDay=day;
        const today = new Date();
        today.setDate(today.getDate()+tempDay)
        console.log("TODAY: "+today)

        const dayOfWeek = today.getDay()
        const firstDayOfWeek = new Date(today);
        firstDayOfWeek.setDate(today.getDate() - dayOfWeek);

        const weekDates: string[] = [];
        for (let i = 0; i < 5; i++) { // מציגים 5 ימים
            const day = new Date(firstDayOfWeek);
            day.setDate(firstDayOfWeek.getDate() + i);
            weekDates.push(day.toLocaleDateString("he-il", { day: "2-digit", month: "2-digit" }));
        }

        setWeekDates(weekDates);
        console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ'+weekDates)

    };



    //  התאמה בין שם המטופל לבין האיי די שלו והכנסתם לסטייט
    const matchingPatientNameToThrerapyName=()=>{
        const pastMapByName: Record<number, string> = {};
        allPatients.forEach((patient) => {
            if (patient.id !== undefined && patient.firstName !== undefined) { 
                pastMapByName[patient.id] = patient.firstName;
            }
        });
        console.log("Map by name: ", pastMapByName); // בדוק אם המפה מכילה נתונים
        setMapByName(pastMapByName);
        
    }
    

   
    useEffect(() => {
        getWeekDates(day);
      
    }, [day]);
    
     

   
   
   
    useEffect(() => {
                (allTherapies).forEach((thera)=>{
            var theFirst=thera.patientFirstName
            var theLastName=thera.patientLastName;
               })

        getWeekDates(day);
        console.log("הפעלתי את הפונקציה")
        console.log('במערך:  '+weekDates)
    }, []);

   
   
  
    useEffect(() => {
        matchingTheTherapiesDateAndTimeToTable()
        setTherapiesByDayAndTime(therapiesByDateAndTime);
   }, [weekDates]);





    useEffect(() => {
        matchingPatientNameToThrerapyName()
       
    }, [allPatients]);





    useEffect(() => {
        // מתעדכן בכל שינוי במערך הטיפולים
        const currentIds = allTherapies.map(therapy => therapy.id);
        console.log("Current therapy IDs: ", currentIds);

        // מעדכן את ה-state של ה-ID הנבחר
        setSelectedTherapyIds(currentIds);
    }, [allTherapies]); 


    const daysAfter=()=>{
        console.log('DAY: '+day)
        setDay(day+7)
        getWeekDates(day)
//updateTherapiesList(day)
        //matchingTheTherapiesDateAndTimeToTable()

        

    }


    const daysBefore=()=>{
        setDay(day-7)
        getWeekDates(day)

    }


    useEffect(()=>{
        if(weekDates.length>0){
        const tempObject:any={};
        weekDates.forEach((doDate)=>{
            tempObject[doDate]={}


        })
        settempTherapiesByDayAndTime(tempObject)
        console.log('FROM SIDE EFFECT: '+JSON.stringify(tempTherapiesByDayAndTime))

        }
    },[weekDates])




    return (

        <div className="WeeklyTable flex-cil-top-center">
            <h2>טבלה שבועית</h2>

            <button className="week-button next-week" onClick={daysAfter}>שבוע הבא</button>
            <button className="week-button previous-week" onClick={daysBefore}>שבוע קודם</button>

         
    



        
   
   
        
       



            <div className="table-responsive">
                <table className="table table-bordered text-center">
                    <thead>
                        <tr className="bg-light-gray">
                            <th className="text-uppercase">שעה</th>
                            {weekDates.map((date, index) => (
                                <th key={index} className="text-uppercase">
                                    {['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי'][index]}<br/>{date}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {timeTherapy.map((currentTime) => (
                            <tr key={currentTime}>
                                <td className="align-middle">{currentTime}</td>
                                {weekDays.map((dayKey) => (
                        
                                    <td key={dayKey} className="sun">
                                        {therapiesByDayAndTime[dayKey][currentTime]?.map((therapy) => (
                                            <div  key={therapy.id}  className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13" >
                                                {therapy.therapyName}
                                                <div className="margin-10px-top font-size14">{therapy.time}</div>
                                                <div className="font-size13 text-light-gray">{therapy.patientFirstName} {therapy.patientLastName}</div>


                                         </div>
                                         
                                        ))}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default WeeklyTable;
