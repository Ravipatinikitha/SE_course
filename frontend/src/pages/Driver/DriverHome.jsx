import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/DriverHome.css';

const DriverHome = () => {
    const navigate = useNavigate();

    return (
        <div className="driver-home">

            <div className="bus-info">
                <p><strong>Driver Name:</strong> Shravya</p>
                <p><strong>Driver ID:</strong> 123</p>
                <p><strong>Assigned Bus:</strong> LH Bus</p>
                <p><strong>Phone No:</strong> 9802134568</p>
            </div>

            <div className="button-group">
                <button className="start-btn">Start Ride</button>
                <button className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
            </div>
        </div>
    );
};

export default DriverHome;
