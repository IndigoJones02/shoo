

import styled from 'styled-components';
import React from 'react';




const Footer = () => {
    
//     return<Diamond
//     color="#000000"
//     bottom="-.01"
//     size="1500px"
//     zIndex={2}
// />

return(
    <React.Fragment>
    <Triangle />
    </React.Fragment>

);


}

const Triangle = styled.div`
        padding: 0;
        margin: 0%;
        width: 0%;
        // opacity: 10%;
        border-left: 50vw solid #22324A;
        border-bottom: 6vw solid #000000;
        border-right: 50vw solid #22324A;


`;

export default Footer;