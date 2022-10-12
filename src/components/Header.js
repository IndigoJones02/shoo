import styled from "styled-components";
// import { auth, provider } from "../firebase";
// eslint-disable-next-line
import React, { component }  from 'react';
import {Triangle} from 'react-awesome-shapes';


const Header = (props) => {
   
    return( 

    <Nav>
        {/* <Logo><img src={require('/Users/hbcuc2-miles/shoo/shoo-app/public/images/kick-off.png')} alt="shoo"></img></Logo> */}
        <Logo><img src='/images/kick-off.png' alt="shoo"></img></Logo>
        <Shoo>SHOO|</Shoo>
        <GoDropDown name='go' id='things'>Go Find A Home</GoDropDown>
        <SearchBar placeholder='Location, Address, Zip Code.....' type='text'/>
        
        
        </Nav>
    
      
    
    
    );

};

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #000000;
opacity: 75%;
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

const Logo = styled.div`
padding: 0;
height: 51px;
width: 50px;
left: 19px;
top 47px;
display: inline-block;
img{
    display: block;
    width: 100%;

}
`;

const Shoo = styled.div`
position: absolute;
width: 92px;
height: 16px;
left: 90px;
top: 30px;
z-index: -1;


font-family: 'Verdana';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 15px;
text-align: center;
letter-spacing: .5rem;;

color: #FFFFFF;


`;
const GoDropDown = styled.select`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    border: 1px solid #f9f9f9;
    border-radius:  4px;


`;
const SearchBar = styled.input`
color: #FFFFFF;
position: absolute;
top: 14px;
left: 880px;
display: flex;
background-color: #000000;
border: 0;
border-radius: 50px;
font-size: 15px;
padding: 15px;
height: 15px;
width: 500px;


`;

export default Header;