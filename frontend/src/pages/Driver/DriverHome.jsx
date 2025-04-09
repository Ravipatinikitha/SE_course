import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/styles/DriverHome.css';

const DriverHome = () => {
    const navigate = useNavigate();
    const driverId = localStorage.getItem('userId'); // assuming it's stored after login

    const [driverInfo, setDriverInfo] = useState({
        driverName: '',
        driverId: '',
        assignedBus: '',
    });

    useEffect(() => {
        const fetchDriverData = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/driver/info/${driverId}`);
                const data = res.data;

                setDriverInfo({
                    driverName: data.driverName,
                    driverId: driverId ?? '',
                    assignedBus: data.assignedBus,
                });
            } catch (err) {
                console.error('Error fetching driver info', err);
            }
        };

        if (driverId) fetchDriverData();
    }, [driverId]);

    return (
        <div className="driver-home">
            <div className="bus-info">
                <p><strong>Driver Name:</strong> {driverInfo.driverName}</p>
                <p><strong>Driver ID:</strong> {driverInfo.driverId}</p>
                <p><strong>Assigned Bus:</strong> {driverInfo.assignedBus}</p>
                <p><strong>Phone No:</strong> 9802134568</p> {/* Optional */}
            </div>

            <div className="button-group">
                <button className="start-btn">Start Ride</button>
                <button className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
            </div>
        </div>
    );
};

export default DriverHome;
