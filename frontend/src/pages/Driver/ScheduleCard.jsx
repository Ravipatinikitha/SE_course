import React from 'react';
import { Calendar } from 'lucide-react';
import '../../assets/styles/ScheduleCard.css';

const ScheduleCard = ({ bus, onStart, onComplete, onDelay }) => {
  return (
    <div className="schedule-card">
     <div className="info-row">
  <span><Calendar size={16} /> {bus.departureLocation}</span>
  <span><strong>Start Time:</strong> {bus.startTime}</span>
</div>
<div className="info-row">
  <span><Calendar size={16} /> {bus.arrivalLocation}</span>
  <span><strong>End Time:</strong> {bus.endTime}</span>
</div>

      <div className="status-chip status-chip--light">{bus.status}</div>
      <div className="button-group">
        <button className="delay-btn" onClick={() => onDelay(bus.id)}>Delay</button>
        {bus.status === 'NOT_STARTED' && (
          <button className="start-btn" onClick={() => onStart(bus.id)}>Start</button>
        )}
        {bus.status === 'STARTED' && (
          <button className="complete-btn" onClick={() => onComplete(bus.id)}>Complete</button>
        )}
      </div>
    </div>
  );
};

export default ScheduleCard;
