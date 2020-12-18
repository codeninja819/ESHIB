import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";
import StyledButton from "../../components/StyledButton";

import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = ({ setOpen, date }) => {
    const md = useMediaQuery("(max-width: 1440px)");

    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);

    return (
        <StyledContainer>
            <Box display={'flex'} mt={md ? '500px' : 'calc(100vw / 1440 * 500)'} data-aos="fade-up">
                {/* <Box mr={md ? '30px' : 'calc(100vw / 1440 * 30)'} /> */}
                {true ?
                    <StyledButton type={'primary'} width={'156'} onClick={() => setOpen(true)}>MINT NOW</StyledButton> :
                    <a href={'https://gleam.io/IbLIQ/ethshibfam-10-whitelist'} target={'_blank'} style={{ textDecoration: 'none' }}>
                        <StyledButton type={'secondary'} width={'156'}>WHITELIST</StyledButton>
                    </a>
                }
            </Box>
        </StyledContainer >
    );
};


const StyledContainer = styled(Box)`
    background-image : url('/images/home/back.png');
    background-size : 100% 100%;
    width : 100%;
    height : calc(100vw / 1440 * 584);
    display : flex;
    justify-content : center;

    @media screen and (max-width : 1440px){
        background-size : 1440px 584px;
        background-position : center;
        height : 584px;
    }
`;


export default HeroSection;