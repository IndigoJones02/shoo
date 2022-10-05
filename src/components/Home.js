import styled from "styled-components";
import React from 'react';
const Home = (props) => {
        return(// <h3>Title Page</h3>
            <PageColor>
            <Container>
                <Content>
                <ShooTitle>shoo</ShooTitle>
                </Content>
            </Container>
            </PageColor>
        
        
        ); 
};
const PageColor = styled.div`
    position: relative;
    width: 1440px;
    height: 3041px;
    background: #F7DFC6;
    z-index: -1;
`;
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
 margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    padding: 40px 30px;
    height: 100%;

`;

const ShooTitle = styled.a`
    position: absolute;
    width: 313.72px;
    height: 73.37px;
    left: 10.55px;
    top: 8.49px;

    font-family: 'Inika';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 125px;

    color: #292929;

`;
// const Swirl = styled.img`
// position: absolute;
// width: 850.99px;
// height: 332.62px;
// left: -1px;
// top: -3.74px;

// // background: rgba(247, 223, 198, 0.75);
// // border: 3px solid #000000;
// z-index: -1;
// src: url("/images/vector4.png");


// `;


export default Home;