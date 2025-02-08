import React from 'react';
import './Modules.css';

const Modules = () => {
  const modules = [
    { id: 1, name: 'Announcements', count: '26 unread' },
    { id: 2, name: 'Student goals' },
    { id: 3, name: 'Calendar', date: '15th Nov, 2024' },
    { id: 4, name: 'School library' },
    { id: 5, name: 'Messaging', count: '5 unread' }
  ];

  return (
    <div className="modules-container">
      <h2>Modules</h2>
      <div className="modules-list">
        {modules.map(module => (
          <div key={module.id} className="module-item">
            <div className="module-icon">📌</div>
            <div className="module-details">
              <div className="module-name">{module.name}</div>
              {(module.count || module.date) && 
                <div className="module-meta">{module.count || module.date}</div>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;