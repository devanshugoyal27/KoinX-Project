import React from 'react';

const CircleSvg = () => {
    const radius = 75;
    const strokeWidth = 26;
    const totalLength = 2 * Math.PI * radius;
    const blueLength = 0.8 * totalLength;
    const yellowLength = totalLength - blueLength; 
  
    return (
      <svg
        className="block w-56 h-56" 
        viewBox="-100 -100 200 200"
      >
        {/* Blue segment */}
        <circle
          cx="0"
          cy="0"
          r={radius}
          fill="none"
          stroke="#2d6cfd" 
          strokeWidth={strokeWidth} 
          strokeDasharray={`${blueLength} ${yellowLength}`}
          transform="rotate(-110)" 
        />
  
        {/* Yellow segment */}
        <circle
          cx="0"
          cy="0"
          r={radius}
          fill="none"
          stroke="#fd842d" 
          strokeWidth={strokeWidth} 
          strokeDasharray={`${yellowLength} ${blueLength}`}
          transform={`rotate(${(blueLength / totalLength) * 360 - 110})`}
        />
      </svg>
    );
};

export default CircleSvg;
