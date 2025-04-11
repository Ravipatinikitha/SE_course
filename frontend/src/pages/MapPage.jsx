import '../assets/styles/StudentDashboard.css';
import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
// import "../assets/styles/MapPage.css";
const containerStyle = {
    width: "100%",
    height: "400px",
  };
  
  const center = {
    lat: 11.3211,
    lng: 75.9346,
  };
const MapPage = () => {
  return (
    
      <div className="dashboard-container">
      <h2>Bus Routes & Stops</h2>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker position={center} />
      </GoogleMap>
      </div>
  
  );
};

export default MapPage;
