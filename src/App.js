import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './App.css';
import Schedule from './components/Schedule';
import Assignments from './components/Assignments';
import Courses from './components/Courses';
import Modules from './components/Modules';
import QuickLinks from './components/QuickLinks';
import TodayEvent from './components/TodayEvent';
import logoImage from './assets/logo.png';


function App() {
  const [layout, setLayout] = useState([
    { i: 'schedule', x: 0, y: 0, w: 3, h: 12 },
    { i: 'assignments', x: 3, y: 0, w: 6, h: 6 },
    { i: 'courses', x: 3, y: 6, w: 3, h: 6 },
    { i: 'modules', x: 6, y: 6, w: 3, h: 6 },
    { i: 'quicklinks', x: 9, y: 0, w: 3, h: 12 },
    { i: 'todayEvent', x: 0, y: 12, w: 3, h: 4 }
  ]);

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <div className="app">
      <header className="header">
        <img src={logoImage} alt="Brisbane State High School" className="logo" />
      </header>
      <div className="content">
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={40}
          width={1400}
          margin={[16, 16]}
          isDraggable={true}
          isResizable={true}
          onLayoutChange={onLayoutChange}
          draggableHandle=".drag-handle"
        >
          {/* Update each component wrapper to include drag handle */}
          <div key="schedule" className="grid-item">
            <div className="drag-handle">⋮⋮</div>
            <Schedule />
          </div>
          <div key="assignments" className="grid-item">
            <div className="drag-handle">⋮⋮</div>
            <Assignments />
          </div>
          <div key="courses" className="grid-item">
            <div className="drag-handle">⋮⋮</div>
            <Courses />
          </div>
          <div key="modules" className="grid-item">
            <div className="drag-handle">⋮⋮</div>
            <Modules />
          </div>
          <div key="quicklinks" className="grid-item">
            <div className="drag-handle">⋮⋮</div>
            <QuickLinks />
          </div>
          <div key="todayEvent" className="grid-item">
            <div className="drag-handle">⋮⋮</div>
            <TodayEvent />
          </div>
        </GridLayout>
      </div>
    </div>
  );
}

export default App;