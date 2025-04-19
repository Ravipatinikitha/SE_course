import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/styles/DriverHome.css';
import { FaCalendarAlt, FaEye } from 'react-icons/fa';

const DriverHome = () => {
    const navigate = useNavigate();
    const driverId = localStorage.getItem('userId');

    const [driverInfo, setDriverInfo] = useState({
        driverName: '',
        driverId: '',
        assignedBus: '',
    });

    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const fetchDriverData = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/driver/info/${driverId}`);
                setDriverInfo({
                    driverName: res.data.driverName,
                    driverId: driverId ?? '',
                    assignedBus: res.data.assignedBus,
                });
            } catch (err) {
                console.error('Error fetching driver info', err);
            }
        };

        const fetchSchedule = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/schedule/driver/${driverId}`);
                setSchedule(res.data);
            } catch (err) {
                console.error('Error fetching schedule', err);
            }
        };

        if (driverId) {
            fetchDriverData();
            fetchSchedule();
        }
    }, [driverId]);

    return (
        <div className="driver-container">
            <div className="driver-card">
                <p><strong>Name:</strong> {driverInfo.driverName}</p>
                <p><strong>ID:</strong> {driverInfo.driverId}</p>
                <p><strong>Assigned Bus:</strong> {driverInfo.assignedBus}</p>
               
            </div>

            <div className="button-group">
                <button className="start-btn" onClick={() => navigate('/driver-schedule')}>Start Ride</button>
                <button className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
            </div>

            <div className="driver-schedule-cards">
                {schedule.map((ride, index) => (
                    <div className="schedule-card" key={index}>
                        <div className="schedule-row">
                            <FaCalendarAlt /> {ride.start} <span>{ride.startTime}</span>
                        </div>
                        <div className="schedule-row">
                            <FaCalendarAlt /> {ride.end} <FaEye /> <span>{ride.endTime}</span>
                        </div>
                        <div className="schedule-buttons">
                            <button className="delay-btn">Delay</button>
                            <button className="start-btn" onClick={() => navigate('/driver-schedule')}>Start</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DriverHome;
