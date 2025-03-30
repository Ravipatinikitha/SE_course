import React from 'react';
import '../assets/styles/StudentHome.css';

const upcomingBuses = [
    { busNumber: 'LH Bus', route: 'Departure: ECLC → Arrival: LH', time: '10:00 AM - 10:05 AM' },
    { busNumber: 'MHB Bus', route: 'Departure: ECLC → Arrival: MBH', time: '10:00 AM - 10:10 AM' },
];

const StudentHome = () => {
    return (
        <div className="student-home">
            {/* Blue Navbar with Heading inside */}
            <div className="nav-bar">
                <h1 className="page-heading">Upcoming Buses</h1>
            </div>

            {/* Upcoming Buses Section */}
            <div className="upcoming-section">
                {upcomingBuses.map((bus, index) => (
                    <div className="bus-card" key={index}>
                        <h3>{bus.busNumber}</h3>
                        <p>{bus.route}</p>
                        <p>{bus.time}</p>
                        <button className="view-map-btn">View in Map</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentHome;
