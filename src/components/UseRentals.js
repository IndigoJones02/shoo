import { useState, useEffect } from "react";
import distance from "./Distance";
import axios, * as others from 'axios';

// const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://zillow-com1.p.rapidapi.com/similarForRent',
    params: {zpid: '77224'},
    headers: {
      'X-RapidAPI-Key': '1ef3fb1bfcmsh6baad8915fcf34fp187976jsn3aa75fb14015',
      'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
    }
  };
  



const useRentals = (preferredLocation) => {
    const [zillow, setZillow] = useState([]);
    const [locations, setLocations] = useState([]);
    useEffect(()=> {
        axios.request(options).then(function (response) {
        //    response.map((feature) => {
        //     if (distance(preferredLocation[1], preferredLocation[0], feature.latitude, feature.longitude) <= 30) {
        //         setZillow([...zillow, [feature.longitude, feature.latitude]])
        //         setLocations([...locations, feature])
        //     }

        //    })
        console.log(response);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return {
        locations,
        setLocations,
        zillow, setZillow
    }
}


export default useRentals;