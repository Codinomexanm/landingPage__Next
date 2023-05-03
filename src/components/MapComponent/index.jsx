import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -15.774314204480694,
  lng: -48.2823397892441
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC4laai2lnX7wqNFa1d2qMYaPlNCTcohRM'
  });

  const [map, setMap] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        position={center}
        onClick={togglePopup}
      >
        {showPopup && (
          <InfoWindow onCloseClick={togglePopup}>
            <div><strong>Igreja Resgatando vidas por Cristo<br /></strong>clique para ir<br /><a target='_blank' href='https://www.google.com.br/maps/place/Login+Internet/@-15.7737214,-48.2871849,15.46z/data=!4m6!3m5!1s0x935bc79f6c816347:0xcf05e7f630cf0408!8m2!3d-15.7744536!4d-48.2823076!16s%2Fg%2F11fhvd7q8c'>Visualize no Google Maps</a></div>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  ) : null;
}

export default MapComponent;
