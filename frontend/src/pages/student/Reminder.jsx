import React, { useState } from 'react';
import '../../assets/styles/Reminder.css';

const Reminder = () => {
    const [bus, setBus] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');

    return (
        <div className="reminder-page">
            <div className="nav-bar" style={{ backgroundColor: '#5A9BD5' }}>
            </div>

            <div className="reminder-form">
                <select value={bus} onChange={(e) => setBus(e.target.value)}>
                    <option value="">Select Bus</option>
                    <option value="LH Bus">LH Bus</option>
                    <option value="Campus Shuttle">Campus Shuttle</option>
                </select>

                <select value={location} onChange={(e) => setLocation(e.target.value)}>
                    <option value="">Select Location</option>
                    <option value="ECLC">ECLC</option>
                    <option value="Main Gate">Main Gate</option>
                </select>

                <select value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="">Select Time</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                </select>

                <div className="reminder-info">Reminder: {bus || 'Bus'} from {location || 'Location'} at {time || 'Time'}</div>
            </div>
        </div>
    );
};

export default Reminder;
