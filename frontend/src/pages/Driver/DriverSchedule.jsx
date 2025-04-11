import '../../assets/styles/DriverSchedule.css';
import React, { useState, useEffect } from 'react';
import { driverAPI } from '../../services/api';
import ScheduleCard from './ScheduleCard';
import '../../assets/styles/StudentDashboard.css';

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
      await fetchDriverSchedule();
    } catch (err) {
      alert("Failed to update status");
    }
  };

  if (loading) return <div className="loading">Loading schedule...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="dashboard-container">
      {schedule.length === 0 ? (
        <p className="empty-text">No scheduled buses</p>
      ) : (
      <div className="buses-list">
      {schedule.map(bus => (
            <ScheduleCard
              key={bus.id}
              bus={bus}
              onStart={(id) => handleStatusUpdate(id, 'STARTED')}
              onComplete={(id) => handleStatusUpdate(id, 'COMPLETED')}
              onDelay={(id) => alert(`Delay logic for Bus ID ${id}`)}
            />
          ))}
      </div>
    )}
    </div>
  );
};

export default DriverScheduleView;

