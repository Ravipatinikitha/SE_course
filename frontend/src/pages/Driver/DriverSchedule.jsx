import '../../assets/styles/DriverSchedule.css';
import React, { useState, useEffect } from 'react';
import { driverAPI } from '../../services/api';

// const DriverSchedule = () => {
//     return (
//         <div className="driver-schedule">

//             <div className="schedule-card">
//                 <p><strong>Departure:</strong> ECLC 🚌 10:00 AM</p>
//                 <p><strong>Arrive:</strong> LH 🏠 10:05 AM</p>
//                 <div className="button-group">
//                     <button className="delay-btn">Delay</button>
//                     <button className="start-btn">Start</button>
//                 </div>
//             </div>

//             <div className="schedule-card">
//                 <p><strong>Departure:</strong> ECLC 🚌 10:00 AM</p>
//                 <p><strong>Arrive:</strong> LH 🏠 10:05 AM</p>
//                 <div className="button-group">
//                     <button className="delay-btn">Delay</button>
//                     <button className="start-btn">Start</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DriverSchedule;




const DriverScheduleView = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDriverSchedule = async () => {
      try {
        setLoading(true);
        const data = await driverAPI.getDriverSchedule();
        setSchedule(data);
      } catch (err) {
        setError(err.message || "Failed to load schedule");
      } finally {
        setLoading(false);
      }
    };

    fetchDriverSchedule();
  }, []);

  if (loading) return <div className="loading">Loading schedule...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="driver-schedule-container">
      <h2>Your Bus Schedule</h2>
      
      {schedule.length === 0 ? (
        <p>No scheduled buses assigned</p>
      ) : (
        <div className="schedule-list">
          {schedule.map(bus => (
            <div key={bus.id} className="schedule-card">
              <h3>{bus.busName}</h3>
              <p>Route: {bus.departureLocation} → {bus.arrivalLocation}</p>
              <p>Time: {bus.startTime} - {bus.endTime}</p>
              <p>Status: {bus.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DriverScheduleView;

