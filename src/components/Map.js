import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
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
      <Header/>

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
        <Marker 
        longitude={lng} 
        latitude={lat}
        draggable
        onDragEnd={(e)=> dispatchEvent({type:'UPDATE_LOCATION', payload:{lng:e.lngLat.lng, lat:e.lngLat.lat}})}
         />
        <NavigationControl position="bottom-right" />
        <FullscreenControl position="bottom-left"/>

        <GeolocateControl position="bottom-left"/>
        
      </Map>
      <Footer/>
    </Container>
  );
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
width: 100%;
text-align: center;
height: 100vh;



`;
const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;

`;
const BackgroundImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    // adds stuff on top of the image rather than behind the image
    z-index: -1; 


`;


export default MapNavigation;