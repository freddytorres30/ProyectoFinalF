// Mapa.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Mapa = () => {
  const mapContainerStyle = {
    height: "400px",
    width: "100%"
  };

  const center = {
    lat: 40.7128, 
    lng: -3.0060 
  };

  return (
    <LoadScript googleMapsApiKey="TU_API_KEY_AQUI">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapa;
