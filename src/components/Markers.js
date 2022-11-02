// import React, { useRef, useEffect } from "react";
// import mapboxgl from "mapbox-gl";
// import useRentals from './Marks';
// // import Map, {
// //     Marker,
// //     NavigationControl,
// //     FullscreenControl,
// //     GeolocateControl,
// //   } from "react-map-gl";



// // const [coordinates, setCoordinates] = useState([])

// const MarkersGalore = (preferredLocation) => {
//     const mapContainerRef = useRef(null);
//     const locations = useRentals(preferredLocation);
//     mapboxgl.accessToken = "pk.eyJ1IjoiaWowMiIsImEiOiJjbDhjNDM1c2YwMzU4M3Btd2NncmJueW9pIn0.InR775LunpY_M4ZlYA6Etg";
//     // Initialize map when component mounts
//     useEffect(() => {
//       const map = new mapboxgl.Map({
//         container: mapContainerRef.current,
//         style: "mapbox://styles/ij02/cl9pt1c5v000f14p4o9x59rd4",
//         center: [-87.65, 41.84],
//         zoom: 10,
//       });
  
//     //   // Create default markers
//     //   locations.zillow.map((feature) =>
//     //     new mapboxgl.Marker().setLngLat(feature).addTo(map)
//     //   );
  
//       // Add navigation control (the +/- zoom buttons)
//       map.addControl(new mapboxgl.NavigationControl(), "top-right");
  
//       // Clean up on unmount
//       return () => map.remove();
//     }, []);
  
//     return <div ref={mapContainerRef} />;
//   };


// export default MarkersGalore;