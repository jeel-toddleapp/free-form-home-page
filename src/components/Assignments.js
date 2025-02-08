import React from 'react';
import './Assignments.css';

const Assignments = () => {
  const assignments = [
    { id: 1, title: 'In My Own Words: Paraphrasing Practice', type: 'FA', class: 'English 6A', score: '15/20', pending: '5/20' },
    { id: 2, title: 'Writing to Convince', type: 'SA', class: 'English 6B', score: '2/12', pending: '4/12' },
    { id: 3, title: 'Decoding Poetry: Susan Cindy', type: 'FA', class: 'English 6C', score: '2/20', pending: '4/20' },
    { id: 4, title: 'The Final Chapter: Comparative Analysis', type: 'FA', class: 'English 6C', score: '2/20', pending: '4/20' }
  ];

  return (
    <div className="assignments-container">
      <h2>Assignments and projects</h2>
      <div className="assignments-tabs">
        <button className="active">To-review</button>
        <button>Unread</button>
        <button>Scheduled</button>
      </div>
      <div className="assignments-list">
        {assignments.map(assignment => (
          <div key={assignment.id} className="assignment-item">
            <div className="assignment-type">{assignment.type}</div>
            <div className="assignment-details">
              <h3>{assignment.title}</h3>
              <div className="assignment-meta">
                <span>{assignment.class}</span>
                <span>{assignment.score}</span>
                <span>{assignment.pending}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;