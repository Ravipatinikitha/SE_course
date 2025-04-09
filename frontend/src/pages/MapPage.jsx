import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "../assets/styles/MapPage.css";
<<<<<<< HEAD
=======
// Get real-time location of a bus
// const busLocation = await busAPI.getBusLocation(busId);
>>>>>>> 5e46033 (Initial commit)

const containerStyle = {
    width: "100%",
    height: "400px",
};

const center = {
    lat: 37.7749, // Example latitude (San Francisco)
    lng: -122.4194, // Example longitude
};

function MapPage() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
    });

    if (!isLoaded) {
        return <p>Loading Map...</p>;
    }

    return (
        <div className="map-page">
            <h2>Bus Routes & Stops</h2>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
}

export default MapPage;
