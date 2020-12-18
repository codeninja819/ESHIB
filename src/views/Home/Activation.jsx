import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";


const Activation = ({ }) => {

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
            <Box mt={md ? '102px' : 'calc(100vw / 1440 * 102)'} textAlign={'center'} fontSize={md ? sm ? xs ? '35px' : '45px' : '60px' : 'calc(100vw / 1440 * 60)'} fontFamily={'Lalezar'} data-aos="fade-up" data-aos-delay="300">
                ROADMAP ACTIVATIONS
            </Box>
            <TextPanel data-aos="fade-up" data-aos-delay="300">
                <Box>
                    We’ve set up some targets for ourselves. Once we hit our next goal, we will begin to work on performing the next listed goal.
                </Box>
                <Box mt={md ? '10px' : 'calc(100vw / 1440 * 10)'}>
                    <span style={{ fontWeight: '700' }}>10%</span> - We pay back and thank our NFT designers and ETH SHIBA Team.<br />
                    <span style={{ fontWeight: '700' }}>25%</span> - Launch of NFT Marketplace for #ETHSHIBFAM 1.0 NFT holders.<br />
                    <span style={{ fontWeight: '700' }}>50%</span> - DAO voting platform is initiated.<br />
                    <span style={{ fontWeight: '700' }}>75%</span> - Biggest SHIB BURN in project history. <br />
                    <span style={{ fontWeight: '700' }}>100%</span> - Launch of sustainable Bitcoin mining facility and #ETHSHIBFAM mining pool.
                </Box>
            </TextPanel>
            <Vector mt={md ? '95px' : 'calc(100vw / 1440 * 95)'}>
                <Box>
                    <Box />
                </Box>
            </Vector>
        </StyledContainer >
    );
};

const TextPanel = styled(Box)`
    font-size: 20px;
    line-height: 205%;
    @media screen and (min-width : 1440px){
        font-size : calc(100vw / 1440 * 20);
    }
    @media screen and (max-width : 750px){
        font-size : 16px;
    }
    @media screen and (max-width : 500px){
        font-size : 15px;
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


export default Activation;