import React from 'react';
import './QuickLinks.css';

const QuickLinks = () => {
  const links = [
    { id: 1, name: 'Start a Scheduled Meeting', description: 'Real-time meetings by Google' },
    { id: 2, name: 'Quiziz', description: 'Create and deliver self-paced learning' },
    { id: 3, name: 'Edval', description: 'Our master timetabling solution' },
    { id: 4, name: 'Periodic table images', description: 'Welcome to periodic table zone' }
  ];

  return (
    <div className="quicklinks-container">
      <h2>Quick links</h2>
      <div className="quicklinks-list">
        {links.map(link => (
          <div key={link.id} className="quicklink-item">
            <div className="quicklink-icon">🔗</div>
            <div className="quicklink-details">
              <div className="quicklink-name">{link.name}</div>
              <div className="quicklink-description">{link.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;