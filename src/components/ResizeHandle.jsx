import React from 'react';

const ResizeHandle = React.forwardRef((props, ref) => {
  const { handleAxis: handleAxisProp, onMouseDown, onMouseUp, onTouchEnd } = props;
  const handleAxis = [handleAxisProp];

  const style = {
    position: 'absolute',
    width: handleAxis.includes('e') || handleAxis.includes('w') ? '20px' : '100%',
    height: handleAxis.includes('n') || handleAxis.includes('s') ? '20px' : '100%',
    background: 'transparent',
    cursor: handleAxis.includes('n') || handleAxis.includes('s') ? 'ns-resize' 
           : handleAxis.includes('e') || handleAxis.includes('w') ? 'ew-resize'
           : handleAxis.includes('nw') || handleAxis.includes('se') ? 'nwse-resize'
           : 'nesw-resize',
           ...(handleAxis.includes('n')?{top:0}:{}),
           ...(handleAxis.includes('s')?{bottom:0}:{}),
           ...(handleAxis.includes('e')?{right:0,top:0}:{}),
           ...(handleAxis.includes('w')?{left:0,top:0}:{}),
           ...(handleAxis.includes('ne')?{top:0,right:0,height:"10px",width:"10px"}:{}),
           ...(handleAxis.includes('sw')?{bottom:0,left:0,height:"10px",width:"10px"}:{}),
           ...(handleAxis.includes('nw')?{top:0,left:0,height:"10px",width:"10px"}:{}),
           ...(handleAxis.includes('se')?{
            bottom: 0,
            right: 0,
            width: '20px',
            height: '20px',
            background: 'linear-gradient(to right bottom, transparent 50%, #1e3a8a 50%)',
            opacity: 0.5,
            transition: 'opacity 0.2s',
            ':hover': {
              opacity: 1
            }}:{}),
  };

  const handleMouseDown = (event) => {
    event.stopPropagation();
    onMouseDown(event);
  };

  const handleMouseUp = (event) => {
    event.stopPropagation();
    onMouseUp(event);
  };

  const handleTouchEnd = (event) => {
    event.stopPropagation();
    onTouchEnd(event);
  };

  return <div ref={ref} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onTouchEnd={handleTouchEnd} style={style} />;
});

export default ResizeHandle;