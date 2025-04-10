import React, { useEffect, useState } from 'react';
import '../../assets/styles/StudentDashboard.css';

const StudentHome = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/student-dashboard')
      .then((res) => res.json())
      .then((data) => setBuses(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="section-title">Upcoming Buses</h2>
      <div className="buses-list">
        {buses.map((bus, index) => (
          <div className="bus-card" key={index}>
            <div className="bus-header">
              <h3 className="bus-name">{bus.busName}</h3>
              <a href="/map" className="map-button">View in Map</a>
            </div>
            <p className="bus-detail"><strong>Departure:</strong> {bus.departureLocation}</p>
            <p className="bus-detail"><strong>Arrival:</strong> {bus.arrivalLocation}</p>
            <p className="bus-detail"><strong>Event:</strong> {bus.startTime}</p>
            <p className="bus-detail"><strong>Schedule:</strong> {bus.endTime}</p>
            <p className="bus-detail"><strong>Status:</strong> {bus.status === 'STARTED' ? 'Running' : bus.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentHome;
