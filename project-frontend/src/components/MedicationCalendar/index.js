import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './index.css'; // Ensure this file has the correct styles

const MedicationCalendar = (props) => {
  const [value, setValue] = useState(new Date());
  const { logs = [] } = props;

  // Use 'YYYY-MM-DD' format in local timezone
  const formatDate = (date) => date.toLocaleDateString('en-CA');

  const takenDates = logs
    .filter(entry => entry.status === 'taken')
    .map(entry => entry.date); // should already be in 'YYYY-MM-DD'

  const missedDates = logs
    .filter(entry => entry.status === 'missed')
    .map(entry => entry.date);

  const todayDate = formatDate(new Date());

  const tileContent = ({ date, view }) => {
    const formatted = formatDate(date);

    if (view === 'month') {
      if (formatted === todayDate) {
        return <div className="dot today"></div>;
      }
      if (takenDates.includes(formatted)) {
        return <div className="dot taken"></div>;
      }
      if (missedDates.includes(formatted)) {
        return <div className="dot missed"></div>;
      }
    }
    return null;
  };

  return (
    <div className="calendar-container">
      <h2>Medication Calendar</h2>
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={tileContent}
      />

      <div className="legend">
        <span><span className="dot taken"></span> Medication taken</span>
        <span><span className="dot missed"></span> Missed medication</span>
        <span><span className="dot today"></span> Today</span>
      </div>
    </div>
  );
};

export default MedicationCalendar;
