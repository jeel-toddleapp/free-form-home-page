import React, { useState, useEffect, useRef } from 'react';
import './Courses.css';

const Courses = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const courses = [
    { id: '6A', name: 'English 6A', grade: 'Grade 6' },
    { id: '6B', name: 'Language & literature 6B', grade: 'Grade 6' },
    { id: '6C', name: 'English 6C', grade: 'Grade 6' },
    { id: '9A', name: 'Math 9A', grade: 'Grade 9' }
  ];

  const getLayoutStyle = () => {
    if (containerWidth < 336) {
      return 'compact';
    } else if (containerWidth < 800) {
      return 'medium';
    }
    return 'full';
  };

  return (
    <div className="courses-container" ref={containerRef}>
      <h2>Courses</h2>
      <div className={`courses-list ${getLayoutStyle()}`}>
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