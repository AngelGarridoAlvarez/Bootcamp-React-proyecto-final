import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import NavBar from '../../shared/components/NavBar/NavBar';
import SearchInput from '../../shared/components/SearchInput/SearchInput';
import GoBackIcon from '../../shared/components/GoBackIcon/GoBackIcon';
import './MapComponent.scss';

function Map() {
  return (
    <GoogleMap
      defaultOptions={{ mapTypeControl: false, fullscreenControl: false }}
      defaultZoom={10}
      defaultCenter={{ lat: 40.416775, lng: -3.703790 }}
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export function MapComponent() {
  // navigator.geolocation.getCurrentPosition(function (position) {
  //   console.log(position);
  //   var pos = {
  //     lat: position.coords.latitude,
  //     lng: position.coords.longitude
  //   };
  // })


  return (
    <div className={"c-map"} style={{ width: "100vw", height: "100vh" }}>
      <div className={"c-map__header"}>
        <GoBackIcon />
        <SearchInput className={"c-map__search"} />
      </div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
          }`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
      <NavBar />
    </div>
  )
}