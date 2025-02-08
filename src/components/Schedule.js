import React from 'react';
import './Schedule.css';

const Schedule = () => {
  const schedule = [
    { time: '9:00 am', subject: 'English', room: 'Room 6A' },
    { time: '10:00 am', subject: 'English', room: 'Room 8A' },
    { time: '11:15 am', subject: 'Chemistry', room: 'Room 6A' },
    { time: '12:00 pm', subject: 'English', room: 'Room 7A' },
    { time: '12:55 pm', subject: 'Chemistry', room: 'Room 7A' },
    { time: '3:00 pm', subject: 'English', room: 'Room 6B' }
  ];

  return (
    <div className="schedule-container">
      <h2>15 Nov 2024, Thu Day 1</h2>
      <div className="schedule-list">
        {schedule.map((item, index) => (
          <div key={index} className="schedule-item">
            <div className="time">{item.time}</div>
            <div className="details">
              <div className="subject">{item.subject}</div>
              <div className="room">{item.room}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;