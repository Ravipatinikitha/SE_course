import React from 'react';
import '../../assets/styles/BusCard.css';

const BusCard = ({ bus }) => (
  <div className="bus-card">
    <div className="bus-header">
      <h3 className="bus-name">{bus.busName}</h3>
      <a href="/map" className="map-button">View in Map</a>
    </div>
    <div className="bus-info-row">
      <p><strong>Departure:</strong> {bus.departureLocation}</p>
      <p><strong>Arrival:</strong> {bus.arrivalLocation}</p>
    </div>
    <div className="bus-info-row">
      <p><strong>Start time:</strong> {bus.startTime}</p>
      <p><strong>End time:</strong> {bus.endTime}</p>
    </div>
    <div className="bus-info-row">
      <p><strong>Status:</strong> {bus.status === 'STARTED' ? 'Running' : bus.status}</p>
    </div>
  </div>
);

export default BusCard;
