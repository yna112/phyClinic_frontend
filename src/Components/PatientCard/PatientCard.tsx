import "./PatientCard.css";

function PatientCard(): JSX.Element {
    return (
        <div className="PatientCard">
            <div className="patient-card">
  <div className="header">
    <span className="reservation-id">Reservation ID #RSVA0011</span>
    <span className="manual-appointment">Manual Appointment</span>
  </div>

  <div className="patient-info">
    <div className="patient-avatar">CS</div>
    <div className="patient-details">
      <h2>Christopher Smallwood</h2>
      <p>Status: <span className="status">Registered</span></p>
      <p>todo todo todo todo </p>
      <button className="edit-button">Edit</button>
    </div>
  </div>

  <div className="treatment-info">
    <div className="treatment">
      <p>Treatment</p>
      <span>Tooth filling</span>
    </div>
    <div className="date-time">
      <p>Date and Time</p>
      <span>Fri, 24 Jun 02:00-03:00 PM</span>
    </div>
    <div className="dentist">
      <p>Dentist</p>
      <span>Drg Putri Larasati</span>
    </div>
  </div>

  <div className="payment-info">
    <span>Bill #10102</span>
    <span className="unpaid-status">UNPAID</span>
    <button className="send-reminder">Send Reminder</button>
  </div>

  <div className="general-info">
    <div className="info">
      <p>Full Name</p>
      <span>Christopher C. Smallwood</span>
    </div>
    <div className="info">
      <p>Phone Number</p>
      <span>+1 (409)-832-3913</span>
    </div>
    <div className="info">
      <p>Email</p>
      <span>ChristopherW12@mail.com</span>
    </div>
    <div className="info">
      <p>Address</p>
      <span>4337 Lynn Ogden Lane, Beaumont, TX 77701</span>
    </div>
  </div>

  <div className="action-buttons">
    <button className="edit-checkup">Edit Medical Checkup</button>
    <button className="add-record">Add Medical Record</button>
  </div>
</div>
			
        </div>
    );
}

export default PatientCard;
