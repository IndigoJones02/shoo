import styled from "styled-components";
// import { auth, provider } from "../firebase";
// eslint-disable-next-line
import React, { component }  from 'react';
import {Triangle} from 'react-awesome-shapes';
import MapSearch from "./MapSearch";


const Header = (setPreferredLocation) => {
   
    return( 

    <Nav>
        {/* <Logo><img src={require('/Users/hbcuc2-miles/shoo/shoo-app/public/images/kick-off.png')} alt="shoo"></img></Logo> */}
        <Logo><img src='/images/kick-off.png' alt="shoo"></img></Logo>
        <Shoo>SHOO|</Shoo>
        {/* <SearchBar placeholder='Location, Address, Zip Code.....' type='text'/> */}
        <MapSearch setPreferredLocation={setPreferredLocation}/>
        
        
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
opacity: 77%;
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

const NavMenu = styled.div`
align-items: center; 
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
padding: 0px
position: relative;
margin-right: auto;
margin-left: 25px;

// causes the logo to disappear and the menu bar disappear and reappear when winod wsize is adjusted
@media (max-width: 768px) {
    display: none;
}


    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        span{
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
        

        &:before {
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px; //puts the underline at the bottom on the nav menu components
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0; //0 to 1 scaling the line goes from nothing to something
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0); //helps with transition think of it going to 0 - 100 like loading
            // adds in the transition when you hover over the nav menu stuff
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; //makes the line transition smoothly when you hover over it
            visibility: hidden;
            width: auto;
        }
    }
        // will make the line appear when you hover over the nav menu options
        &:hover {
            span:before{
                transform: scaleX(1); //0 to 1 scaling the line goes from nothing to something 
                visibility: visible;
                opacity: 1 !important; //helps with visibilty
            }
        }
    }
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
letter-spacing: .5rem;

color: #FFFFFF;


`;
const GoDropDown = styled.select`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    border: 1px solid #f9f9f9;
    border-radius:  4px;


`;
// const SearchBar = styled.input`
// color: #FFFFFF;
// position: absolute;
// top: 14px;
// left: 880px;
// display: flex;
// background-color: #000000;
// border: 0;
// border-radius: 50px;
// font-size: 15px;
// padding: 15px;
// height: 15px;
// width: 500px;


// `;

export default Header;