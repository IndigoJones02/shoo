import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";
function MapNavigation() {
  const [lng, setLng] = useState(-75.6903);
  const [lat, setLat] = useState( 45.4211,);


  return (
    <div className="App">
      <Map
      mapboxAccessToken={"pk.eyJ1IjoiaWowMiIsImEiOiJjbDhjNDM1c2YwMzU4M3Btd2NncmJueW9pIn0.InR775LunpY_M4ZlYA6Etg"}
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
      }}
      initialViewState={{
        longitude: lng,
        latitude: lat,
      }}
      mapStyle="mapbox://styles/ij02/cl8c3au5r002f15qml3t1q07h"
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </Map>
    </div>
  );
}

export default MapNavigation;