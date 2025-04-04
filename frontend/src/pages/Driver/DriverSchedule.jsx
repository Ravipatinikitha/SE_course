import React from 'react';
import '../../assets/styles/DriverSchedule.css';

const DriverSchedule = () => {
    return (
        <div className="driver-schedule">

            <div className="schedule-card">
                <p><strong>Departure:</strong> ECLC 🚌 10:00 AM</p>
                <p><strong>Arrive:</strong> LH 🏠 10:05 AM</p>
                <div className="button-group">
                    <button className="delay-btn">Delay</button>
                    <button className="start-btn">Start</button>
                </div>
            </div>

            <div className="schedule-card">
                <p><strong>Departure:</strong> ECLC 🚌 10:00 AM</p>
                <p><strong>Arrive:</strong> LH 🏠 10:05 AM</p>
                <div className="button-group">
                    <button className="delay-btn">Delay</button>
                    <button className="start-btn">Start</button>
                </div>
            </div>
        </div>
    );
};

export default DriverSchedule;
