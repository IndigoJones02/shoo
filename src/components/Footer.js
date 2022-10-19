

import styled from 'styled-components';
import React from 'react';




const Footer = () => {
    // return(
    //     <Foot>
    //     <AptName>EXAMPLE APARTMENT</AptName>
    //  <Trii ><img src='/images/triFoot.png' alt='triange'/> </Trii>
    //  </Foot>
    // );
     return ( 
         <Wrapper> 

             <Trii ><img src='/images/triFoot.png' alt='triange'/> </Trii>
             <HomeInfo onClick={()=>{}}>PLACE NAME</HomeInfo>
             </Wrapper>
     );
};

    

const Wrapper = styled.div`
        margin: 0 auto;


`;

const HomeInfo = styled.button`
    border: none;
    position: absolute;
    bottom: 35px;
    left: 655px;
    background-color:transparent;
    color: white;
    letter-spacing: .5rem;
    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const Trii = styled.div`
position: absolute;
height: 1600px;
width: 1600px;
left: -60px;
top: 726px;
opacity: 60%;
display: inline-block;
img{
    display: block;
    width: 100%;

}


`;

// const Triangle = styled.div`
//         padding: 0;
//         margin: 0%;
//         width: 0%;
//         // opacity: 10%;

//         border-left: 50vw solid transparent;
//         border-bottom: 7vw solid #000000;
//         border-right: 50vw solid transparent;


// `;

export default Footer;