import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
// import useRentals from "./UseRentals";
// import Marks from './Marks';
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";
// import MarkersGalore from "./Markers";
// import MapSearch from "./MapSearch";
function MapNavigation() {
  const [lng, setLng] = useState(-75.6903);
  const [lat, setLat] = useState( 45.4211,);
  const [preferredLocation, setPreferredLocation] = useState('')
  // let locations = useRentals(preferredLocation);
  const data = {
    "features": [
      {
        "type": "Feature",
        "properties": {
          "title": "Lincoln Park",
          "description": "A northside park that is home to the Lincoln Park Zoo"
        },
        "geometry": {
          "coordinates": [-87.637596, 41.940403],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "Burnham Park",
          "description": "A lakefront park on Chicago's south side"
        },
        "geometry": {
          "coordinates": [-87.603735, 41.829985],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "Millennium Park",
          "description": "A downtown park known for its art installations and unique architecture"
        },
        "geometry": {
          "coordinates": [-87.622554, 41.882534],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "Grant Park",
          "description": "A downtown park that is the site of many of Chicago's favorite festivals and events"
        },
        "geometry": {
          "coordinates": [-87.619185, 41.876367],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "Humboldt Park",
          "description": "A large park on Chicago's northwest side"
        },
        "geometry": {
          "coordinates": [-87.70199, 41.905423],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "Douglas Park",
          "description": "A large park near in Chicago's North Lawndale neighborhood"
        },
        "geometry": {
          "coordinates": [-87.699329, 41.860092],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "Calumet Park",
          "description": "A park on the Illinois-Indiana border featuring a historic fieldhouse"
        },
        "geometry": {
          "coordinates": [-87.530221, 41.715515],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "Jackson Park",
          "description": "A lakeside park that was the site of the 1893 World's Fair"
        },
        "geometry": {
          "coordinates": [-87.580389, 41.783185],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "Columbus Park",
          "description": "A large park in Chicago's Austin neighborhood"
        },
        "geometry": {
          "coordinates": [-87.769775, 41.873683],
          "type": "Point"
        }
      }
    ],
    "type": "FeatureCollection"
  }

  return (
    <Container>
      <Header setPreferredLocation={setPreferredLocation}/>
      {/* <MapSearch setPreferredLocation={setPreferredLocation}></MapSearch> */}
      {/* <MarkersGalore preferredLocation={preferredLocation} /> */}



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
        longitude={preferredLocation.feature.geometry.coordinates[0]} 
        latitude={preferredLocation.feature.geometry.coordinates[1]}
        draggable
        onDragEnd={(e)=> dispatchEvent({type:'UPDATE_LOCATION', payload:{lng:e.lngLat.lng, lat:e.lngLat.lat}})}
         />
        {/* {
        // let locations = useRentals(preferredLocation);
        // This works....
        data.features.map((feature, index)=> {
          
          return(
        <Marker key={index} 
        longitude={feature.geometry.coordinates[0]} 
        latitude={feature.geometry.coordinates[1]}
        draggable
        onDragEnd={(e)=> dispatchEvent({type:'UPDATE_LOCATION', payload:{lng:e.lngLat.lng, lat:e.lngLat.lat}})}
         />
         ) })} */}
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