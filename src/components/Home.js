import carpush from '../assets/carpush.mov';
import styled from 'styled-components';
// import Header from './Header';


const Home = () => {
    return(
        <Main>
            <Overlay />
                    <VidB src={carpush} autoPlay loop muted />
                    <Content>
                    {/* <Logo><img src='/images/kick-off.png' alt="shoo"></img></Logo> */}
                     {/* <Shoo>SHOO|</Shoo> */}
                    <img src='/images/kicking.png' alt='shoo'/>
                     SHOO
                    </Content>
                    {/* <Header /> */}
    
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 85vh;

`;
const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 85%;
background-color: #000000;
opacity: 30%;



`;
const VidB = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;


`;

const Content = styled.h1`
    font-family: 'Impact';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: top-right;
    align-items: top-right;
    color: #FFFFFF;
    font-size: 40px;
    letter-spacing: .5rem;
    img{
        top:0px;
        display: block;
        width: 7%;
    
    }

    



`;

const Logo = styled.div`

img{
    top:0px;
    display: block;
    width: 7%;

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


export default Home;