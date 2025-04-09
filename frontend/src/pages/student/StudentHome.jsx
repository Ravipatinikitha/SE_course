import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


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

const UpcomingBuses = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/student-dashboard')

            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setBuses(data))
            .catch(error => console.error('Fetch error:', error));
    }, []);


    return (

        <div className="student-home">

            {/* <div className="upcoming-section">
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
            </div> */}

        <div>
            <h2>Upcoming Bus Schedules</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Bus Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Start Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {buses.map((bus, index) => (
                        <tr key={index}>
                            <td>{bus.busName}</td>
                            <td>{bus.departureLocation}</td>
                            <td>{bus.arrivalLocation}</td>
                            <td>{bus.startTime}</td>
                            <td>{bus.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
        </div>
    );
};

export default UpcomingBuses;
