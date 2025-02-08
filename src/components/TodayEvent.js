import React from 'react';
import './TodayEvent.css';
import studentImage from '../assets/student.jpeg';

const TodayEvent = () => {
  return (
    <div className="today-event-container">
      <h2>Today's toddle event</h2>
      <div className="event-image">
        <img src={studentImage} alt="Student studying with colorful pencils" />
      </div>
    </div>
  );
};

export default TodayEvent;