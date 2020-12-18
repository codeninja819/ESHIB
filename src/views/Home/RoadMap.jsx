import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

const RoadMap = ({ }) => {

    const md = useMediaQuery("(max-width: 1440px)");
    const sm = useMediaQuery("(max-width: 850px)");
    const xs = useMediaQuery("(max-width: 500px)");

    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);

    const roadmaps = [
        {
            image: '/images/home/roadmap1.png',
            text: 'Members will have the exclusive opportunity to be one of the first to purchase an #ETHSHIBFAM 1.0 NFT, by successfully entering the Official Whitelist. Whitelisting will be restricted to 990 spots.'
        },
        {
            image: '/images/home/roadmap2.png',
            text: 'Successful whitelisted applicants will then have the first opportunity to purchase their #ETHSHIBFAM 1.0 NFT before anyone else, securing their place in ETH SHIBA history. The Pre-Sale round will feature the first chance to acquire an available 990 NFTs, prior to a Public sale. The Pre-sale round will last for only 48hrs.'
        },
        {
            image: '/images/home/roadmap3.png',
            text: 'Post pre-sale, and if NFTs still remain available, our Public Sale will provide anyone the opportunity to mint and receive their #ETHSHIBFAM 1.0 NFT, before the Public Sale ends. The Public Sale will run for a period of time to complete our milestone activations. Once 75% of all #ETHSHIBFAM 1.0 NFTs are sold, ETH SHIBA will hold the biggest SHIB burn event in project history. '
        },
        {
            image: '/images/home/roadmap4.png',
            text: 'Once sold out and after some time, #ETHSHIBFAM 1.0 NFTs will be tradable upon the official ETH SHIBA Marketplace. Holders can stake their NFTs to earn daily BTC payouts from our own exclusive ETH SHIBA 100% carbon neutral mining farm.'
        }
    ]
    return (
        <StyledContainer>
            <Box mt={md ? '113px' : 'calc(100vw / 1440 * 113)'} textAlign={'center'} fontSize={md ? sm ? xs ? '35px' : '45px' : '60px' : 'calc(100vw / 1440 * 60)'} fontFamily={'Lalezar'} data-aos="fade-up" data-aos-delay="300">
                #ETHSHIBFAM 1.0 ROADMAP
            </Box>
            <Box mt={md ? '162px' : 'calc(100vw / 1440 * 162)'}>
                {roadmaps.map((data, i) => {
                    return <RoadMapItem style={{ marginBottom: i === roadmaps.length - 1 && 0 }} data-aos="fade-up" data-aos-delay="300">
                        <Box>
                            <Box>
                                <img src={data.image} width={'100%'} height={'100%'} />
                            </Box>
                            <Box>Phase #{i + 1}</Box>
                        </Box>
                        <Box>
                            {data.text}
                        </Box>
                    </RoadMapItem>
                })}
            </Box>

            <Vector mt={md ? '107px' : 'calc(100vw / 1440 * 107)'}>
                <Box>
                    <Box />
                </Box>
            </Vector>
        </StyledContainer >
    );
};


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

const RoadMapItem = styled(Box)`
    border: 3px solid #FFFFFF;
    filter: drop-shadow(0px 7px 29px rgba(100, 100, 111, 0.2));
    border-radius: 11px;
    width : 100%;
    position : relative;
    margin-bottom : 218px;
    >div:nth-child(1){
        position : absolute;
        left : calc(50% - 125px);
        top : -125px;
    }
    >div>div:nth-child(1){
        width : 250px;
    }
    >div>div:nth-child(2){
        font-style: italic;
        font-size: 20px;
        line-height: 125%;
        text-align: center;
        color: #FFFFFF;
    }
    >div:nth-child(2){
        font-weight: 600;
        font-size: 20px;
        line-height: 205%;
        color: #F4BC5F;
        padding : 211px 26px 20px 26px;
    }
    @media screen and (min-width : 1440px){
        border-radius: calc(100vw / 1440 * 11);
        >div:nth-child(1){
            left : calc(50% - 100vw / 1440 * 125);
            top : calc(-100vw / 1440 * 125);
        }
        >div>div:nth-child(1){
            width : calc(100vw / 1440 * 250);
        }
        >div>div:nth-child(2){
            font-size: calc(100vw / 1440 * 20);
        }
        >div:nth-child(2){
            font-size: calc(100vw / 1440 * 20);
            padding : calc(100vw / 1440 * 211) calc(100vw / 1440 * 26) calc(100vw / 1440 * 20) calc(100vw / 1440 * 26);
        }
        margin-bottom : calc(100vw / 1440 * 218);
    }

    @media screen and (max-width : 700px){
        >div:nth-child(1){
            left : calc(50% - 75px);
            top : -75px;
        }
        >div>div:nth-child(1){
            width : 150px;
        }
        >div>div:nth-child(2){
            font-size: 16px;
        }
        >div:nth-child(2){
            font-size: 16px;
            padding : 140px 26px 20px 26px;
        }
        margin-bottom : 130px;
    }
    @media screen and (max-width : 400px){
        >div>div:nth-child(2){
            font-size: 12px;
        }
        >div:nth-child(2){
            font-size: 12px;
            padding : 120px 26px 20px 26px;
        }
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


export default RoadMap;