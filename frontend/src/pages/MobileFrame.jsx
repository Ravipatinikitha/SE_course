import React from 'react';
import '../assets/styles/MobileFrame.css';

const MobileFrame = ({ children }) => {
  return (
    <div className="center-wrapper">
      <div className="device-preview">
        <div className="notch-bar">
          <span>9:41</span>
          <span>4G WiFi 100%</span>
        </div>
        <div className="mobile-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
