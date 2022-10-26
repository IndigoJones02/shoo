import { useState, useEffect } from "react";
import distance from "./Distance";

  



const useRentals = (preferredLocation) => {
    const [zillow, setZillow] = useState([]);
    const [locations, setLocations] = useState([]);
    useEffect(()=> {

     fetch("https://us-real-estate.p.rapidapi.com/for-rent",  {
            'method': 'GET',
            'headers': {
                'X-RapidAPI-Key': '1ef3fb1bfcmsh6baad8915fcf34fp187976jsn3aa75fb14015',
                'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
            }}).then((response)=> response.json())
               .then((result) => {
                   result.data.results.map((feature) => {
                       if(distance(preferredLocation[1], preferredLocation[0], feature.location.address.coordinate.lat, feature.location.address.coordinate.lng) <= 30){
                           setZillow([...zillow, [feature.location.address.coordinate.lng, feature.location.address.coordinate.lat]]);
                       }});
                // console.log(result);
                   
               }).catch ((err)=> {console.log(err);} );
     
    }, []);

    return {
        locations,
        setLocations,
        zillow, 
        setZillow,
    }
}


export default useRentals;