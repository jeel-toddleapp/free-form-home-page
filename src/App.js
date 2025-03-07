import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
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
import ResizeHandle from './components/ResizeHandle';
import ViewportWrapper from './components/ViewportWrapper';


const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const initialLayouts = {
    lg: [
      { i: 'schedule', x: 0, y: 0, w: 3, h: 12, minW: 2, maxW: 4, minH: 8, maxH: 16 },
      { i: 'assignments', x: 3, y: 0, w: 6, h: 6, minW: 4, maxW: 12, minH: 4, maxH: 8 },
      { i: 'courses', x: 3, y: 6, w: 3, h: 6, minW: 2, maxW: 12, minH: 4, maxH: 8 },
      { i: 'modules', x: 6, y: 6, w: 3, h: 6, minW: 2, maxW: 4, minH: 4, maxH: 8 },
      { i: 'quicklinks', x: 9, y: 0, w: 3, h: 12, minW: 2, maxW: 4, minH: 8, maxH: 16 },
      { i: 'todayEvent', x: 0, y: 12, w: 3, h: 4, minW: 2, maxW: 4, minH: 3, maxH: 6 }
    ],
    sm: [
      { i: 'schedule', x: 0, y: 0, w: 12, h: 12, minW: 12, maxW: 12, minH: 8, maxH: 16, static: true },
      { i: 'assignments', x: 0, y: 0, w: 12, h: 6, minW: 12, maxW: 12, minH: 4, maxH: 8 },
      { i: 'courses', x: 0, y: 0, w: 12, h: 6, minW: 12, maxW: 12, minH: 4, maxH: 8 },
      { i: 'modules', x: 0, y: 24, w: 12, h: 6, minW: 12, maxW: 12, minH: 4, maxH: 8 },
      { i: 'quicklinks', x: 0, y: 30, w: 12, h: 12, minW: 12, maxW: 12, minH: 8, maxH: 16 },
      { i: 'todayEvent', x: 0, y: 42, w: 12, h: 4, minW: 12, maxW: 12, minH: 3, maxH: 6 }
    ]
  };

  const [layouts, setLayouts] = useState(initialLayouts);
  const [currentBreakpoint, setCurrentBreakpoint] = useState('lg');

  const onLayoutChange = (layout, layouts) => {
    setLayouts(layouts);
  };

  const onBreakpointChange = (breakpoint) => {
    setCurrentBreakpoint(breakpoint);
  };

  return (
    <div className="app">
      <header className="header">
        <img src={logoImage} alt="Brisbane State High School" className="logo" />
      </header>
      <div className="content">
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 821, sm: 0 }}
          cols={{ lg: 12, sm: 12 }}
          rowHeight={40}
          margin={[16, 16]}
          isDraggable={currentBreakpoint !== 'sm'}
          isResizable={currentBreakpoint !== 'sm'}
          onLayoutChange={onLayoutChange}
          onBreakpointChange={onBreakpointChange}
          draggableHandle=".drag-handle"
          useCSSTransforms={true}
          preventCollision={false}
          showPlaceholders={true}
          placeholder={{
            backgroundColor: 'rgba(30, 58, 138, 0.1)',
            border: '2px dashed #1e3a8a',
            borderRadius: '12px'
          }}
          resizeHandle={<ResizeHandle />}
          resizeHandles={['s', 'e', 'se','n','w','sw','ne','nw']}
        >
          {/* Update each component wrapper to include drag handle */}
          <div key="schedule" className="grid-item drag-handle">
            <ViewportWrapper>
              <Schedule />
            </ViewportWrapper>
          </div>
          
          <div key="assignments" className="grid-item drag-handle">
            <ViewportWrapper>
              <Assignments />
            </ViewportWrapper>
          </div>
          
          <div key="courses" className="grid-item drag-handle">
            {/* <div className="drag-handle">⋮⋮</div> */}
            <div>
            <Courses />
            </div>
          </div>
          <div key="modules" className="grid-item drag-handle">
            {/* <div className="drag-handle">⋮⋮</div> */}
            <ViewportWrapper>

            <Modules />
            </ViewportWrapper>
          </div>
          <div key="quicklinks" className="grid-item drag-handle">
            {/* <div className="drag-handle">⋮⋮</div> */}
            <ViewportWrapper>

            <QuickLinks />
            </ViewportWrapper>
          </div>
          <div key="todayEvent" className="grid-item drag-handle">
            {/* <div className="drag-handle">⋮⋮</div> */}
            <ViewportWrapper>

            <TodayEvent />
            </ViewportWrapper>

          </div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
}

export default App;