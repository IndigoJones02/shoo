// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import { useState } from 'react';
// import Map from '../components/Map';

export default function Home() {
    const [ libraries ] = useState(['places'])
    // require('dotenv').config()
    // console.log(process.env)
    // for google maps api key replace with process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    const { isLoaded } =  useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
});
    if (!isLoaded) {return <div>Loading...</div>};
    return <Maps />
}

function Maps() {
    return (
        <GoogleMap 
            zoom={10}
            center={{lat:43, lng:-80}}
            className="map-container">
         </GoogleMap>

    );
}