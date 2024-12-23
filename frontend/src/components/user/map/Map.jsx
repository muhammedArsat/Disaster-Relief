import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS for styling

// Define a custom red marker icon
const redIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconSize: [25, 41], // Standard size for Leaflet markers
  iconAnchor: [12, 41], // Anchor point to align the marker properly
  popupAnchor: [1, -34], // Position of popup relative to marker
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png", 
  shadowSize: [41, 41], // Size of the shadow
});
const Map = () => {
  return (
    <div className="map">
      <h1>Disaster Strikes Here Stay Informed, Stay Prepared. </h1>
      <p>
        Check real-time conditions and weather updates to understand the impact
        and support relief efforts.
      </p>
      <MapContainer
        center={[13.0827, 80.2707]} // Chennai coordinates
        zoom={13} // Initial zoom level
        style={{ height: "100vh", width: "100%" }} // Map container styling
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tiles
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Add a marker with the red icon */}
        <Marker position={[13.0827, 80.2707]} icon={redIcon}>
          {/* Popup for additional information */}
          <Popup>
            <div>
              <h3>Chennai</h3>
              <p>Chennai</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
