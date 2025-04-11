import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "../../assets/styles/BusSchedule.css";

const BusSchedule = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/bus-schedule')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => setBuses(data))
            .catch(error => console.error('Fetch error:', error));
    }, []);

    return (
        <div className="schedule-wrapper">
            {/* Header */}
            <div className="schedule-header">
                <Link to="/reminder" className="add-reminder">+ Add Reminder</Link>
            </div>

            {/* Schedule Table */}
            <div className="schedule-table">
                <div className="table-header">
                    <div>Bus</div>
                    <div>Location</div>
                    <div>Time</div>
                </div>
                {buses.map((bus, index) => (
                    <div key={index} className="table-row">
                        <div>{bus.busName}</div>
                        <div>{bus.departureLocation}</div>
                        <div>{bus.startTime}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusSchedule;
