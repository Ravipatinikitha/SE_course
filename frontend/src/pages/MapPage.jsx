import React from 'react';
import '../assets/styles/MapPage.css';

function MapPage() {
    return (
        <div className="map-page">
            <p>View bus routes and stops here.</p>
            <div className="map-placeholder">
                📍 Map will be displayed here.
            </div>
        </div>
    );
}

export default MapPage;
