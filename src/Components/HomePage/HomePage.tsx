import { Link } from "react-router-dom";
import "./HomePage.css";
import { FaUser, FaCalendarAlt, FaListAlt, FaPlusCircle } from "react-icons/fa";

function HomePage(): JSX.Element {
    const table = [
        { time: "08:00", patient: "יוסי כהן", type: "טיפול ידני" },
        { time: "09:00", patient: "שרה לוי", type: "טיפול חשמלי" },
        { time: "10:00", patient: "דוד בן-גוריון", type: "טיפול אולטרסאונד" },
    ];

    return (
        <div className="HomePage flex-cil-top-center">
            <div className="links">
                <Link to="listPatients"><FaListAlt /> רשימת פציינטים</Link><br/>
                <Link to="createPatient"><FaPlusCircle /> יצירת פציינט</Link><br/>
                <Link to="patientDetails"><FaUser /> פרטי פציינט</Link><br/>
                <Link to="therapyScheduling"><FaCalendarAlt /> קביעת טיפול</Link><br/>
                <Link to="tableExamp">טבלה לדוגמא</Link><br/>

            </div>
            <div className="schedule">
                {/*<h2>סדר היום</h2>*/}
                <table>
                    <thead>
                        <tr>
                            <th>שעה</th>
                            <th>פציינט</th>
                            <th>סוג טיפול</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((row, index) => (
                            <tr key={index}>
                                <td>{row.time}</td>
                                <td>{row.patient}</td>
                                <td>{row.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HomePage;
