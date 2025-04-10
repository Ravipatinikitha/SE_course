import '../../assets/styles/DriverSchedule.css';
import React, { useState, useEffect } from 'react';
import { driverAPI } from '../../services/api';
import { Eye, Calendar } from 'lucide-react'; // Optional for icons

const DriverScheduleView = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDriverSchedule = async () => {
    const driverId = localStorage.getItem('userId');
    try {
      setLoading(true);
      const data = await driverAPI.getDriverSchedule(driverId);
      const filtered = data.filter(bus => bus.status !== 'COMPLETED');
      setSchedule(filtered);
    } catch (err) {
      setError(err.message || "Failed to load schedule");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDriverSchedule();
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await driverAPI.updateStatus(id, newStatus);
      await fetchDriverSchedule(); // refresh list
    } catch (err) {
      alert("Failed to update status");
    }
  };

  if (loading) return <div className="loading">Loading schedule...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="driver-schedule-container">
      <h2 className="page-title">Schedule</h2>
      {schedule.length === 0 ? (
        <p className="empty-text">No scheduled buses</p>
      ) : (
        <div className="schedule-list">
          {schedule.map(bus => (
            <div key={bus.id} className="schedule-card">
              <div className="info-row">
                <span><Calendar size={16} /> {bus.departureLocation}</span>
                <span><Eye size={16} /> {bus.startTime}</span>
              </div>
              <div className="info-row">
                <span><Calendar size={16} /> {bus.arrivalLocation}</span>
                <span><Eye size={16} /> {bus.endTime}</span>
              </div>
              <div className="button-group">
                <button className="delay-btn">Delay</button>
                {bus.status === 'NOT_STARTED' && (
                  <button className="start-btn" onClick={() => handleStatusUpdate(bus.id, 'STARTED')}>Start</button>
                )}
                {bus.status === 'STARTED' && (
                  <button className="complete-btn" onClick={() => handleStatusUpdate(bus.id, 'COMPLETED')}>Complete</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DriverScheduleView;
