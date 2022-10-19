import {useState} from 'react';



const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [suggestions, setSuggestions] = useState([]);

    
    const handleChange = async (e) => {
        setValue(e.target.value)
        try{
        const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?access_token=pk.eyJ1IjoiaWowMiIsImEiOiJjbDhjNDM1c2YwMzU4M3Btd2NncmJueW9pIn0.InR775LunpY_M4ZlYA6Etg&autocomplete=true`
        const res = await fetch(endpoint);
        const results = await res.json();
        setSuggestions(results?.features)
        } catch (err){
            console.log(err)
        }
    };

    return {
        value,
        onChange: handleChange,
        setValue,
        suggestions,
        setSuggestions
    };

};

export default useInput;