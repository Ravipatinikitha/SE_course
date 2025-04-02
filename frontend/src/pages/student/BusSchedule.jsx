import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/BusSchedule.css";

const BusSchedule = () => {
    const busScheduleData = [
        { bus: "MHB Bus", location: "ECLC", time: "10:00 AM" },
        { bus: "LH Bus", location: "LH", time: "10:05 AM" },
        { bus: "LH(SOMS) Bus", location: "SOMS", time: "10:10 AM" },
    ];

    return (
        <div className="bus-schedule-container">
            <div className="bus-schedule-header">
                <Link to="/reminder" className="add-reminder">+ Add Reminder</Link>
            </div>

            <table className="bus-schedule-table">
                <thead>
                    <tr>
                        <th>Bus</th>
                        <th>Location</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {busScheduleData.map((bus, index) => (
                        <tr key={index}>
                            <td>{bus.bus}</td>
                            <td>{bus.location}</td>
                            <td>{bus.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BusSchedule;
