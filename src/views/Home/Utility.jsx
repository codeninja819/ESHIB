import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

const Utility = ({ }) => {

    const md = useMediaQuery("(max-width: 1440px)");
    const sm = useMediaQuery("(max-width: 850px)");
    const xs = useMediaQuery("(max-width: 500px)");

    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);

    const utilities = [
        {
            title: 'ETH SHIBA BTC MININNG FARM',
            details: [
                'At 100% sell-out ETHSHIBA will be deploying our own 100% carbon neutral Bitcoin mining farm commencing with 30 S19a Pro miners.',
                'Our own secure pool will be exclusive for ETHSHIBAFAM 1.0 NFT holders only and will provide daily payouts and an annual return.',
                `The price of the NFTs will also appreciate over time as the price of BTC appreciates with the opportunity to trade the NFT's via our own marketplace.`
            ]
        },
        {
            title: 'ETH SHIBA DAO',
            details: [
                'Subject to the rarity score of your NFT, this score and NFT will then allow you the holder, certain voting rights on the future ETH SHIBA DAO.',
                'Your ETH SHIB FAM 1.0 NFT will become extremely valuable as you have a lot more influence over how ETH SHIBA is run and develops, deciding which direction the project progresses.',
            ]
        },
        {
            title: 'BIGGEST SHIBA BURNER',
            details: [
                'We intend to be the leading project for burning $SHIBA globally.',
                'By acquiring your #ETHSHIBAFAM 1.0 NFT, you will contribute to our mission and be apart of the biggest $SHIB burn event by any project if we can successfully sell out 75% of our first #ETHSHIBAFAM drop.',
                `Be apart of greatness and join us!`
            ]
        },
        {
            title: 'ONE OF US! #ETHSHIBAFAM',
            details: [
                'We have one of the strongest and most tight-knit communities across the whole Crypto eco-system. ',
                'Acquiring one or more of our exclusive ETH SHIB FAM 1.0 NFTs brings you closer within our Family and ETH SHIBA Community.',
                `We support each other and want only the very best for our community members, creating the most positive and unique culture unique only to ETH SHIBA!`
            ]
        },
    ];

    return (
        <StyledContainer>
            <Box mt={md ? '76px' : 'calc(100vw / 1440 * 76)'} textAlign={'center'} fontSize={md ? sm ? xs ? '35px' : '45px' : '60px' : 'calc(100vw / 1440 * 60)'} fontFamily={'Lalezar'} data-aos="fade-up" data-aos-delay="300">
                UTLIITY FOR YOUR #ETHSHIBAFAM
            </Box>
            <UtilityPanel>
                {utilities.map((data, i) => {
                    return <UtilityItem data-aos="fade-up" data-aos-delay={300 * i + 300}>
                        <Box>{data.title}</Box>
                        {data.details.map(data => {
                            return <Detail >
                                <Box >
                                    <img src={'/images/home/utility.png'} width={'100%'} />
                                </Box>
                                <Box>{data}</Box>
                            </Detail>
                        })}
                    </UtilityItem>
                })}
            </UtilityPanel>
            <Vector mt={md ? '117px' : 'calc(100vw / 1440 * 117)'}>
                <Box>
                    <Box />
                </Box>
            </Vector>
        </StyledContainer >
    );
};

const Detail = styled(Box)`
    margin-top : 12px;
    display : flex;
    >div:nth-child(1){
        min-width : 22px;
        margin-right : 14px;
        margin-top : 7px;
    }
    >div:nth-child(2){
        font-size : 16px;
        line-height : 200%;
        font-weight : 300;
        @media screen and (max-width : 500px){
                font-size : 15px;
        }
    }
    @media screen and (min-width : 1440px){
        margin-top : calc(100vw / 1440 * 12);
        >div:nth-child(1){
            min-width : calc(100vw / 1440 * 22);
            margin-right : calc(100vw / 1440 * 14);
            margin-top : calc(100vw / 1440 * 7);
        }
        >div:nth-child(2){
            font-size : calc(100vw / 1440 * 16);
        }
    }
`;

const UtilityItem = styled(Box)`
    border: 3px solid #FFFFFF;
    filter: drop-shadow(0px 7px 29px rgba(100, 100, 111, 0.2));
    border-radius: 11px;
    width: 320px;
    height: 691px;
    padding : 22px 24px 0px 24px;
    >div:nth-child(1){
        font-family: 'Lalezar';
        font-size : 24px;
        line-height : 133%;
        text-align : center;
        max-width : 80%;
        margin : 0 auto;
        height : 80px;
    }
    @media screen and (min-width : 1440px){
        border-radius: calc(100vw / 1440 * 11);
        width: calc(100vw / 1440 * 320);
        height: calc(100vw / 1440 * 691);
        padding : calc(100vw / 1440 * 22) calc(100vw / 1440 * 24) 0px calc(100vw / 1440 * 24);
        >div:nth-child(1){
            font-size : calc(100vw / 1440 * 24);
            height : calc(100vw / 1440 * 80);
        }
    }
`;

const UtilityPanel = styled(Box)`
    display : flex;
    justify-content : space-between;
    margin : 0 auto;
    flex-wrap : wrap;
    margin-top : 58px;
    @media screen and (max-width : 1400px){
        width : 850px;
        >div{
            margin-bottom : 40px;
            width : 400px;
            height : 600px;
        }
    }
    @media screen and (max-width : 900px){
        width : 100%;
        max-width : 600px;
        >div{
            height : fit-content;
            padding-bottom : 50px;
            width : 100%;
        }
    }
    @media screen and (min-width : 1440px){
        margin-top : calc(100vw / 1440 * 58);
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


export default Utility;