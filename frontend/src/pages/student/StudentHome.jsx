import React from 'react';
import '../../assets/styles/StudentHome.css';
import { Link } from "react-router-dom";

const upcomingBuses = [
    { 
        id: 1, 
        busNumber: 'LH Bus', 
        route: 'Departure: ECLC → Arrival: LH', 
        time: '10:00 AM - 10:05 AM' 
    },
    { 
        id: 2, 
        busNumber: 'MHB Bus', 
        route: 'Departure: ECLC → Arrival: MBH', 
        time: '10:00 AM - 10:10 AM' 
    },
];

const StudentHome = () => {
    return (
        <div className="student-home">

            <div className="upcoming-section">
                {upcomingBuses.map((bus) => (
                    <div className="bus-card" key={bus.id}>
                        <h3>{bus.busNumber}</h3>
                        <p>{bus.route}</p>
                        <p>{bus.time}</p>
                        <Link to="/map">
                            <button className="view-map-btn">View in Map</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentHome;
