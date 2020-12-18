import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

const MeetShiba = ({ }) => {

    const md = useMediaQuery("(max-width: 1440px)");
    const sm = useMediaQuery("(max-width: 850px)");
    const xs = useMediaQuery("(max-width: 500px)");

    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);

    return (
        <StyledContainer>
            <Box mt={md ? '69px' : 'calc(100vw / 1440 * 69)'} textAlign={'center'} fontSize={md ? sm ? xs ? '35px' : '45px' : '60px' : 'calc(100vw / 1440 * 60)'} fontFamily={'Lalezar'} data-aos="fade-up" data-aos-delay={300}>
                MEET ETH SHIBA
            </Box>
            <MeetShibaPanel>
                <Box data-aos="fade-right" data-aos-delay={300}>
                    ETH SHIBA is a project for Crypto & Shiba lovers. Launched on the Binance Smart Chain to facilitate increased adoption due to lower gas fees, $ETHSHIB allows crypto investors to earn regular dividends in the form of Binance Pegged ETH just by holding a minimum of $ETHSHIB in their wallet. Earn by just holding $ETHSHIB! ETH SHIBA is currently available on both Pancakeswap and Uniswap and multiple CEX platforms, P2PB2B and Digifinex.
                    ETH SHIBA is a community project for the people and by the people. The developers of this project care greatly for Crypto and the SHIBA community. With $ETHSHIB, we aim to make a difference in the world, not just in our bank accounts. We understand that Crypto & Shiba adoption is inevitable and through our integrity, we aim to change the lives of people around the world. $ETHSHIB mission is to grow the SHIBA community whilst rewarding holders in ETH. This will allow us to create the biggest community in the crypto space.
                </Box>
                <Box data-aos="fade-left">
                    <img src={'/images/home/meetshiba.png'} width={'100%'} />
                </Box>
            </MeetShibaPanel>
            <a href={'https://ethshiba.io'} target={'_blank'} style={{ textDecoration: 'none' }}>
                <StyledButton data-aos="fade-up" data-aos-delay={300}>
                    MEET ETH SHIBA
                </StyledButton>
            </a>
            <Vector mt={md ? '84px' : 'calc(100vw / 1440 * 84)'}>
                <Box>
                    <Box />
                </Box>
            </Vector>
        </StyledContainer >
    );
};

const StyledButton = styled.button`
    font-family : 'Poppins';
    font-weight: 700;
    font-size : calc(100vw / 1440 * 20);
    width: 156px;
    height: 50px;

    background: transparent;
    border: 3px solid #F4BC5F;
    border-radius: 8px;
    color : white;

    display : flex;
    justify-content:center;
    align-items: center;

    cursor : pointer;

    margin : 0 auto;
    margin-top : calc(100vw / 1440 * 48);
    width: calc(100vw / 1440 * 200);
    height: calc(100vw / 1440 * 50);
    
    @media screen and (max-width : 1440px){
       margin-top : 48px;
       width: 200px;
        height: 50px;
        font-size : 20px;
    }
    transition : all 0.3s;
    :hover {
        animation: pulse2 1s;
        box-shadow: 0 0 0 2em rgba(255,255,255,0);
        transform : scale(1.05, 1.05);
      }
`;

const MeetShibaPanel = styled(Box)`
    margin-top : 23px;
    display : flex;
    justify-content : space-between;
    >div:nth-child(1){
        font-size :20px;
        line-height : 160%;
        width : 100%;
        max-width : 649px;
    }
    >div:nth-child(2){
        width : 100%;
        max-width : 477px;
    }
    @media screen and (min-width : 1440px){
        margin-top : calc(100vw / 1440 * 23);
        >div:nth-child(1){
            font-size :calc(100vw / 1440 * 20);
            max-width : calc(100vw / 1440 * 649);
        }
        >div:nth-child(2){
            max-width : calc(100vw / 1440 * 477);
        }
    }

    @media screen and (max-width : 1300px){
        flex-direction : column-reverse;
        >div{
            margin : 0 auto;
            margin-bottom : 50px;
        }
        >div:nth-child(2){
            width : 80%;
        }
    }
    @media screen and (max-width : 500px){
        >div:nth-child(1){
            font-size : 16px;
        }
    }
`;

const Vector = styled(Box)`
    >div{
        width : 100%;
        position : relative;
        height : 3px;
        background-color : #F4BC5F;
    }
    >div>div{
        width : 10px;
        height : 10px;
        border-radius : 50%;
        background-color : #F4BC5F;
        position : absolute;
        left : calc(50% - 5px);
        top : -5px;
    }
    margin : 0 auto;
    max-width : 600px;
    width : 80%;

    @media screen and (min-width : 1440px){
        >div{
            height : calc(100vw / 1440 * 3);
        }
        >div>div{
            width : calc(100vw / 1440 * 10);
            height : calc(100vw / 1440 * 10);
            left : calc(50% - 100vw / 1440 * 5);
            top : calc(-100vw / 1440 * 5);
        }
        max-width : calc(100vw / 1440 * 600);
    }
`;

const StyledContainer = styled(Box)`
    color :white;
    padding : 0 65px;
    overflow : hidden;
    @media screen and (min-width : 1440px){
        padding : 0 calc(100vw / 1440 * 65);
    }

    @media screen and (max-width : 750px){
        padding : 0 20px;
    }
    @media screen and (max-width : 450px){
        padding : 0 10px;
    }
`;


export default MeetShiba;