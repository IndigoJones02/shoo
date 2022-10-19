import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import geoJson from "./chicago-parks.json";





const Locations = () => {
/*
 Possible solution need to rertrieve the input from MapSearch and use the Distance component to display
 markers of places near by the location inputed by the user.

 Then in exchange find a new api that will have the lng and lat of the location and use that as a pinning point.


*/
//     const mapContainerRef = useRef(null);

//     // Initialize map when component mounts
//     useEffect(() => {
//       const map = new mapboxgl.Map({
//         container: mapContainerRef.current,
//         style: "mapbox://styles/mapbox/streets-v11",
//         center: [-87.65, 41.84],
//         zoom: 10,
//       });
  
//       // Create default markers
//       geoJson.features.map((feature) =>
//         new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
//       );
  
//       // Add navigation control (the +/- zoom buttons)
//       map.addControl(new mapboxgl.NavigationControl(), "top-right");
  
//       // Clean up on unmount
//       return () => map.remove();
//     }, []);
  
//     return <div className="map-container" ref={mapContainerRef} />;
//   };
}

export default Locations;