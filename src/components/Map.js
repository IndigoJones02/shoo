import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import Footer from "./Footer";
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
    <Container>
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
        <FullscreenControl position="bottom-left"/>

        <GeolocateControl position="bottom-left"/>
        
      </Map>
      {/* <Footer/> */}
    </Container>
  );
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;


`;


export default MapNavigation;