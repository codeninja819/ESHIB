import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";
import StyledButton from "../../components/StyledButton";
import CountDown from "../../components/CountDown";
import useNFTData from "../../hooks/useNFTData";

import AOS from "aos";
import "aos/dist/aos.css";

const FamSection = ({ open, setOpen, date }) => {

    const md = useMediaQuery("(max-width: 1440px)");
    const sm = useMediaQuery("(max-width: 850px)");
    const xs = useMediaQuery("(max-width: 500px)");

    const { mintedCount } = useNFTData();

    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);

    return (
        <StyledContainer>
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                <Box textAlign={'center'} fontSize={md ? sm ? xs ? '38px' : '60px' : '90px' : 'calc(100vw / 1440 * 90)'} mt={md ? '27px' : 'calc(100vw / 1440 * 27)'} fontFamily={'Lalezar'} data-aos="fade-up">#ETHSHIBFAM 1.0 </Box>
                <Box textAlign={'center'} mt={md ? xs ? '0px' : '-20px' : 'calc(-100vw / 1440 * 20)'} fontSize={md ? sm ? xs ? '14px' : '20px' : '30px' : 'calc(100vw / 1440 * 30)'} data-aos="fade-up" data-aos-delay="300">
                    #ETHSHIBFAM 1.0 helps you gain exposure to Bitcoin in your portfolio without having to deal with the complications of holding the asset directly. Introducing sustainably-mined bitcoin. Powering innovation, focused on the future, whilst protecting the planet.
                </Box>
            </Box>
            <Vector mt={md ? '68px' : 'calc(100vw / 1440 * 68)'} mb={'50px'}>
                <Box>
                    <Box />
                </Box>
            </Vector>
            {/* {
                true ? <Box width={'fit-content'} margin={'0 auto'} data-aos="fade-up" data-aos-delay="300">
                    <CountDown date={date} />
                </Box> : ''
            } */}
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} mt={'30px'} data-aos="fade-up" data-aos-delay="300">
                <Box fontFamily={'Lalezar'} fontSize={md ? sm ? xs ? '35px' : '45px' : '60px' : 'calc(100vw / 1440 * 60)'}>MINTING PROGRESS</Box>
                <Box fontSize={md ? sm ? xs ? '18px' : '25px' : '35px' : 'calc(100vw / 1440 * 35)'} fontWeight={'700'} mt={'calc(-100vw / 1440 * 20)'}>{mintedCount} / 1000</Box>
            </Box>
            <MintingInfo mt={md ? '80px' : 'calc(100vw / 1440 * 80)'}>
                <Box data-aos="fade-right" data-aos-delay="300">
                    <Box display={'flex'}>
                        <Box>
                            <img src={'/images/home/mintingtag.png'} width={'100%'} height={'100%'} />
                        </Box>
                        <Box>1,000 unique & collectible #ETHSHIBFAM 1.0 NFTS randomly generated on the BSC Blockchain (Bep20).</Box>
                    </Box>

                    <Box display={'flex'} mt={md ? '16px' : 'calc(100vw / 1440 * 16)'}>
                        <Box>
                            <img src={'/images/home/mintingtag.png'} width={'100%'} height={'100%'} />
                        </Box>
                        <Box>100 hand-drawn traits, the combinations are endless. Each #ETHSHIBFAM 1.0 NFT is completely unique and cannot be duplicated.</Box>
                    </Box>

                    <Box display={'flex'} mt={md ? '16px' : 'calc(100vw / 1440 * 16)'}>
                        <Box >
                            <img src={'/images/home/mintingtag.png'} width={'100%'} height={'100%'} />
                        </Box>
                        <Box>ETH SHIBA is on a mission to create a unique and ‘sustainably green’ driven crypto mining ecosystem, for the future.</Box>
                    </Box>

                    <Box display={'flex'} mt={md ? '16px' : 'calc(100vw / 1440 * 16)'}>
                        <Box>
                            <img src={'/images/home/mintingtag.png'} width={'100%'} height={'100%'} />
                        </Box>
                        <Box>Successful whitelisted applicants will have only 48hrs to mint and secure their #ETHSHIBFAM 1.0 NFT.</Box>
                    </Box>
                </Box>

                <Box data-aos="fade-left" >
                    <img src={'/images/home/team3.jpg'} width={'100%'} style={{ borderRadius: '6px' }} />
                </Box>
            </MintingInfo>
            <Box display={'flex'} justifyContent={'center'} data-aos="fade-up" data-aos-delay="300">
                <Box display={'flex'} mt={md ? '66px' : 'calc(100vw / 1440 * 66)'}>
                    {/* <Box mr={md ? '30px' : 'calc(100vw / 1440 * 30)'} /> */}
                    {true ?
                        <StyledButton type={'primary'} width={'156'} onClick={() => setOpen(true)}>MINT NOW</StyledButton> :
                        <a href={'https://gleam.io/IbLIQ/ethshibfam-10-whitelist'} target={'_blank'} style={{ textDecoration: 'none' }}>
                            <StyledButton type={'secondary'} width={'156'}>WHITELIST</StyledButton>
                        </a>
                    }
                </Box>
            </Box>
            <Vector mt={md ? '68px' : 'calc(100vw / 1440 * 68)'}>
                <Box>
                    <Box />
                </Box>
            </Vector>
        </StyledContainer >
    );
};


const MintingInfo = styled(Box)`
    display : flex;
    justify-content : space-between;
    >div>div>div:nth-child(2){
        font-size : 20px;
        line-height : 41px;
        @media screen and (max-width : 1100px){
            font-size : 14px;
            line-height : 29px;
        }
        @media screen and (max-width : 450px){
            font-size : 12px;
            line-height : 29px;
        }
    }
    >div{
        width : calc(50% - 34px);
    }
    >div>div>div:nth-child(1){
        min-width : 25px;
        height :35px;
        margin-right : 10px;
    }

    @media screen and (min-width : 1440px){
        >div>div>div:nth-child(2){
            font-size : calc(100vw / 1440 * 20);
            line-height : calc(100vw / 1440 * 41);
        }
        >div{
            width : calc(50% - 100vw / 1440 * 34);
        }
        >div>div>div:nth-child(1){
            min-width : calc(100vw / 1440 * 25);
            height :calc(100vw / 1440 * 35);
            margin-right : calc(100vw / 1440 * 10);
        }
    }

    @media screen and (max-width : 900px){
        flex-direction : column-reverse;
        align-items : center;
        >div{
            width : 100%;
        }
        >div:nth-child(2){
            max-width : 400px;
        }
        >div:nth-child(1){
            max-width : 600px;
            margin-top : 20px;
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


export default FamSection;