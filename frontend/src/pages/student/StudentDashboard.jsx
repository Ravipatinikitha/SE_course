import React, { useEffect, useState } from 'react';
import BusCard from './Buscard'; // adjust this path if needed
import '../../assets/styles/StudentDashboard.css';

const StudentHome = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/student-dashboard')
      .then((res) => res.json())
      .then((data) => setBuses(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      {/* <header className="dashboard-header">
        <h2>Upcoming Buses</h2>
      </header> */}
      <div className="buses-list">
        {buses.map((bus, index) => (
          <BusCard key={index} bus={bus} />
        ))}
      </div>
    </div>
  );
};

export default StudentHome;
