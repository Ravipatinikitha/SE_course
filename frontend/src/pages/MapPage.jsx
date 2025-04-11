import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "../assets/styles/MapPage.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 11.3211,
  lng: 75.9346,
};

const MapPage = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Make sure .env is correctly set!
  });

  if (loadError) {
    return <p>Error loading maps. Please check your API key or internet.</p>;
  }

  if (!isLoaded) {
    return <p>Loading Map...</p>;
  }

  return (
    <div className="map-page">
      <h2>Bus Routes & Stops</h2>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MapPage;
