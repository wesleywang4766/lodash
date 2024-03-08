import React from 'react';
import './BlurBackground.css';

const BlurBackground = ({ children }) => {
  return (
    <div className="blur-background">
      {children}
    </div>
  );
};

export default BlurBackground;