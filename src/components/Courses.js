import React from 'react';
import './Courses.css';

const Courses = () => {
  const courses = [
    { id: '6A', name: 'English 6A', grade: 'Grade 6' },
    { id: '6B', name: 'Language & literature 6B', grade: 'Grade 6' },
    { id: '6C', name: 'English 6C', grade: 'Grade 6' },
    { id: '9A', name: 'Math 9A', grade: 'Grade 9' }
  ];

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <div className="courses-list">
        {courses.map(course => (
          <div key={course.id} className="course-item">
            <div className="course-id">{course.id}</div>
            <div className="course-details">
              <div className="course-name">{course.name}</div>
              <div className="course-grade">{course.grade}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;