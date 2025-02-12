import React, { useState,useEffect } from 'react';
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
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileLayout, setMobileLayout] = useState([
    { i: 'schedule', x: 0, y: 0, w: 12, h: 12, minW: 12, maxW: 12, minH: 8, maxH: 16 },
    { i: 'assignments', x: 0, y: 12, w: 12, h: 6, minW: 12, maxW: 12, minH: 4, maxH: 8 },
    { i: 'courses', x: 0, y: 18, w: 12, h: 6, minW: 12, maxW: 12, minH: 4, maxH: 8 },
    { i: 'modules', x: 0, y: 24, w: 12, h: 6, minW: 12, maxW: 12, minH: 4, maxH: 8 },
    { i: 'quicklinks', x: 0, y: 30, w: 12, h: 12, minW: 12, maxW: 12, minH: 8, maxH: 16 },
    { i: 'todayEvent', x: 0, y: 42, w: 12, h: 4, minW: 12, maxW: 12, minH: 3, maxH: 6 }
  ]);
  const [desktopLayout, setDesktopLayout] = useState([
    { i: 'schedule', x: 0, y: 0, w: 3, h: 12, minW: 2, maxW: 4, minH: 8, maxH: 16 },
    { i: 'assignments', x: 3, y: 0, w: 6, h: 6, minW: 4, maxW: 12, minH: 4, maxH: 8 },
    { i: 'courses', x: 3, y: 6, w: 3, h: 6, minW: 2, maxW:12, minH: 4, maxH: 8 },
    { i: 'modules', x: 6, y: 6, w: 3, h: 6, minW: 2, maxW: 4, minH: 4, maxH: 8 },
    { i: 'quicklinks', x: 9, y: 0, w: 3, h: 12, minW: 2, maxW: 4, minH: 8, maxH: 16 },
    { i: 'todayEvent', x: 0, y: 12, w: 3, h: 4, minW: 2, maxW: 4, minH: 3, maxH: 6 }
  ]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onLayoutChange = (newLayout) => {
    if (width <= 820) {
      setMobileLayout(newLayout);
    } else {
      setDesktopLayout(newLayout);
    }
  };

  const getGridWidth = () => {
    if (width <= 820) {
      return width - 32;
    } else if (width <= 1400) {
      return width - 64;
    }
    return 1400;
  };

  return (
    <div className="app">
      <header className="header">
        <img src={logoImage} alt="Brisbane State High School" className="logo" />
      </header>
      <div className="content">
        <GridLayout
          className="layout"
          layout={width <= 820 ? mobileLayout : desktopLayout}
          cols={12}
          rowHeight={40}
          width={getGridWidth()}
          margin={[16, 16]}
          isDraggable={true}
          isResizable={true}
          onLayoutChange={onLayoutChange}
          draggableHandle=".drag-handle"
          useCSSTransforms={true}
          preventCollision={false}
          showPlaceholders={true}
          placeholder={{
            backgroundColor: 'rgba(30, 58, 138, 0.1)',
            border: '2px dashed #1e3a8a',
            borderRadius: '12px'
          }}
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