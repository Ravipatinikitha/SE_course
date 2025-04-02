import React from 'react';
import '../../assets/styles/Reminder.css';

const Reminder = () => {
    return (
        <div className="reminder-page">
            <div className="nav-bar" style={{ backgroundColor: '#5A9BD5' }}>
            </div>

            <div className="reminder-form">
                <button>Select Bus</button>
                <button>Location</button>
                <button>Time</button>
                <div className="reminder-info">Reminder: LH Bus from ECLC at 5:00 PM</div>
            </div>
        </div>
    );
};

export default Reminder;
