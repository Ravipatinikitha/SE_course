import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/StudentDashboard.css';

const StudentDashboard = () => (
    <div className="dashboard-menu">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Bus Schedule</li>
            <li>Map</li>
            <li>Notifications</li>
            <li>FAQ</li>
            <li>Feedback</li>
        </ul>
    </div>
);

export default StudentDashboard;
