import React, { useState } from 'react';
import "./TableExamp.css";

interface Person {
  id: number;
  name: string;
  phone: string;
  email: string;
}

const people: Person[] = [
  { id: 1, name: 'יוחנן כהן', phone: '050-1234567', email: 'yohanan@gmail.com' },
  { id: 2, name: 'שרה לוי', phone: '050-2345678', email: 'sara@example.com' },
  { id: 3, name: 'משה ישראלי', phone: '050-3456789', email: 'moshe@example.com' },
  { id: 4, name: 'חנה שמעוני', phone: '050-4567890', email: 'hana@example.com' },
  { id: 5, name: 'דוד ברוך', phone: '050-5678901', email: 'david@example.com' },
  { id: 6, name: 'רחל פרץ', phone: '050-6789012', email: 'rachel@example.com' },
  { id: 7, name: 'אבי כהן', phone: '050-7890123', email: 'avi@example.com' },
  { id: 8, name: 'לאה מזרחי', phone: '050-8901234', email: 'lea@example.com' },
  { id: 9, name: 'יוסף עוז', phone: '050-9012345', email: 'yosef@example.com' },
  { id: 10, name: 'רות אביטל', phone: '050-0123456', email: 'rut@example.com' },
  { id: 11, name: 'אלי בן-חיים', phone: '050-1234567', email: 'eli@example.com' },
  { id: 12, name: 'מרים גדעון', phone: '050-2345678', email: 'miriam@example.com' },
  { id: 13, name: 'שמעון כהן', phone: '050-3456789', email: 'shimon@example.com' },
  { id: 14, name: 'לאה אשכנזי', phone: '050-4567890', email: 'lea@example.com' },
  { id: 15, name: 'ראובן לוי', phone: '050-5678901', email: 'reuven@example.com' },
  { id: 16, name: 'אסתר כהן', phone: '050-6789012', email: 'ester@example.com' },
  { id: 17, name: 'מיכאל לוי', phone: '050-7890123', email: 'michael@example.com' },
  { id: 18, name: 'חנה לוי', phone: '050-8901234', email: 'hana@example.com' },
  { id: 19, name: 'בנימין ישראלי', phone: '050-9012345', email: 'benyamin@example.com' },
  { id: 20, name: 'אליהו ברוך', phone: '050-0123456', email: 'eli@example.com' }
];

function TableExamp(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const recordsPerPage = 10;

  const filteredPeople = people.filter(person =>
    person.name.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredPeople.length / recordsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0);
  };

  const displayedPeople = filteredPeople.slice(
    currentPage * recordsPerPage,
    (currentPage + 1) * recordsPerPage
  );

  return (
    <div className="TableExamp">
      <input
        type="text"
        placeholder="חפש שם"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredPeople.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>שם</th>
              <th>טלפון</th>
              <th>מייל</th>
            </tr>
          </thead>
          <tbody>
            {displayedPeople.map((person, index) => (
              <tr key={index}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.phone}</td>
                <td><a href={`mailto:${person.email}`}>{person.email}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>לא נמצאו תוצאות לחיפוש שלך</p>
      )}
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
  );
}

export default TableExamp;
