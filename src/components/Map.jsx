// import { css } from '@emotion/core';

// add  useState,useCallBack, useRef
import { useMemo} from 'react';

// add Marker, DirectionsRenderer, Circle, MarkerClusterer,
import {GoogleMap} from '@react-google-maps/api';

// import Places from './Places';
// import Distance from './Distance';


// const  LatLngLiteral = new window.google.maps.LatLngLiteral();
// const  DirectionalResult = new window.google.maps.DirectionalResult;
// const  MapOptions = new window.google.maps.MapOptions;

export default function Map() {

    const center = useMemo(() => ({lat: 43, lng: -80}), []);

    return (<div className='container'>
        <div className='controls'>
            <h1>Commute?</h1>

        </div>
        <div className='map'>
            <GoogleMap zoom={10} center={center} mapContainerClassName='map-container' ></GoogleMap>
        </div>
    </div>)
};



// const defaultOpts = css({
//     strokeOpacity: 0.5,
//     strokeWeight: 2,
//     clickable: false,
//     draggable: false,
//     editable: false,
//     visible: true,
// });

// const closeOpts =css({
//     ...defaultOpts,
//     zIndex: 3,
//     fillOpacity: 0.05,
//     strokeColor: "#8BC34A",
//     fillColor: "#8BC34A",
    
// });

// const middleOpts = css({
//     ...defaultOpts,
//     zIndex: 2,
//     fillOpacity: 0.05,
//     strokeColor: "#FBC02D",
//     fillColor: "#FBC02D",
// });

// const farOpts = css({
//     ...defaultOpts,
//     zIndex: 1,
//     fillOpacity: 0.05,
//     strokeColor: "#FF5252", 
//     fillColor: "#FF5252",
// });

// const generateHomes = (position) =>{
//     Array = LatLngLiteral;
//     const _homes = new Array();
//     for (let i = 0; i< 100; i++)  {
//         const direction = Math.random() < 0.5 ? -2 :2;
//         _homes.push({
//             lat: position.lat + Math.random() / direction,
//             lng: position.lng + Math.random() / direction,
//         });
//     }
//     return _homes;  
// };
