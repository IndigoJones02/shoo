import React from 'react';
import styled from 'styled-components';
import useInput from './UseInputs';


export default function MapSearch({setPreferredLocation}) {
    const address = useInput("")


    return (
    <Wrapper>
    <SearchBar placeholder='Location, Address, Zip Code.....' {...address} isTyping=
    {address.value !== ""}/>
    {address.suggestions?.length > 0 && (
        <SuggestionsWrapper>{address.suggestions.map((suggestion, index) =>{
            return<Suggestions key={index} onClick={()=> {
                address.setValue(suggestion.place_name);
                address.setSuggestions([]);
                setPreferredLocation(suggestion);
                
                

            }}>{suggestion.place_name}</Suggestions>
        }
        )}</SuggestionsWrapper>
    )}
    </Wrapper>
    );



};


const Wrapper = styled.div`

    
    margin: 0 auto;


`;



const SearchBar = styled.input`
color: #FFFFFF;
position: absolute;
top: 14px;
left: 885px;
display: flex;
background-color: #5d757e;
border: 0;
border-radius: 50px;
font-size: 15px;
padding: 15px;
height: 15px;
width: 500px;
::placeholder { 
    color: white;
    opacity: 60%; 
  }


`;

const SuggestionsWrapper = styled.div`
    top: 61px;
    right: 20px;
    background: #5d757e;
    letter-spacing: normal;
    color: white;
    position: absolute;
    width: 500px;
    padding: 10px 20px;
    border-right: 1px solid #000000;
    border-left: 1px solid #000000;
    // border-right-style: solid;
    // border-left-style: solid;
    border-radius: 10px 10px 10px 10px;


`;

const Suggestions = styled.p`
    cursor: pointer;
    max-width: 500px
   

`;
