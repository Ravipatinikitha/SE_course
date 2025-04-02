import React from 'react';
import '../../assets/styles/BusCard.css';


const BusCard = ({ bus }) => (
    <div className="bus-card">
        <h3>{bus.name}</h3>
        <p>Departure: {bus.departure} - {bus.time}</p>
        <p>Arrival: {bus.arrival}</p>
        <button>View in Map</button>
    </div>
);

export default BusCard;