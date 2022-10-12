import styled from "styled-components";
import React, { component }  from 'react';

const Favorites = (props) => {


    return( 
    <SideBar>
        <Logo><img src="shoo-app/src/images/kick-off.png" alt="shoo"></img></Logo>
        <Login>LOGIN</Login>
        </SideBar>
    
    
    
    
    );

};

const SideBar = styled.div `
position: fixed;
top: 4;
left: 0;
right: 10;
height: 70px;
background-color: #000000;
opacity: 50%;
display: flex;
align-items: center;
padding: 0 36px;
letter-spacing: 16px;

transition: opacity .5s ease-out;
transform: translateZ(0);
justify-content: space-between;
background-color: #090b13;
z-index: 3;
text-align: center;
display: flex;
`;



export default Favorites;