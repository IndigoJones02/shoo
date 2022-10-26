




const distance = (lat1, lng1, lat2, lng2) => {
        // Transforming the degrees into Radians
        lng1 = lng1 * Math.PI / 180;
        lng2 = lng2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;

        // Haversine Formula
        let lngDiff = lng2 - lng2;
        let latDiff = lat2 - lat1;
        let havFormula1 = Math.pow(Math.sin(latDiff/2), 2)
                         + (Math.cos(lat1) * Math.cos(lat2)) 
                         + Math.pow(Math.sin(lngDiff/2), 2);
        let havFormula2 = 2*Math.asin(Math.sqrt(havFormula1));

        return (havFormula2*3956);





}

export default distance;