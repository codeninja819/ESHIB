import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";
import StyledButton from "../../components/StyledButton";


import AOS from "aos";
import "aos/dist/aos.css";

const PriceScaCity = ({ setOpen, date }) => {

    const md = useMediaQuery("(max-width: 1440px)");
    const sm = useMediaQuery("(max-width: 850px)");
    const xs = useMediaQuery("(max-width: 500px)");

    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);


    const prices = [
        {
            title: 'EARLY BIRDS',
            images: '/images/home/batch.png',
            amount: '240 NFTS',
            price: '0.8 BNB'
        },
        {
            title: 'BATCH #2',
            images: '/images/home/batch.png',
            amount: '250 NFTS',
            price: '1 BNB'
        },
        {
            title: 'BATCH #3',
            images: '/images/home/batch.png',
            amount: '250 NFTS',
            price: '1.2 BNB'
        },
        {
            title: 'FINAL BATCH',
            images: '/images/home/batch.png',
            amount: '250 NFTS',
            price: '1.6 BNB'
        }
    ];

    return (
        <StyledContainer>
            <Box mt={md ? '69px' : 'calc(100vw / 1440 * 69)'} textAlign={'center'} fontSize={md ? sm ? xs ? '35px' : '45px' : '60px' : 'calc(100vw / 1440 * 60)'} fontFamily={'Lalezar'} data-aos="fade-up" data-aos-delay="300">
                RANDOM MINT PRICE & SCARCITY
            </Box>
            <PricePanel mt={md ? '44px' : 'calc(100vw / 1440 * 44)'} display={'flex'} justifyContent={'space-between'} >
                {prices.map((data, i) => {
                    return <PriceItem data-aos="fade-left" data-aos-delay={300 * i}>
                        <Box>{data.title}</Box>
                        <Box>
                            <img src={data.images} width={'100%'} />
                        </Box>
                        <Box>{data.amount}</Box>
                        <Box>{data.price}</Box>
                    </PriceItem>
                })}
            </PricePanel>
            <Box mt={md ? '15px' : 'calc(100vw / 1440 * 15)'} data-aos="fade-up" data-aos-delay="300">
                <Box display={'flex'} width={'fit-content'} margin={'0 auto'}>
                    {/* <Box mr={md ? '30px' : 'calc(100vw / 1440 * 30)'} /> */}
                    {true ?
                        <StyledButton type={'primary'} width={'156'} onClick={() => setOpen(true)}>MINT NOW</StyledButton> :
                        <a href={'https://gleam.io/IbLIQ/ethshibfam-10-whitelist'} target={'_blank'} style={{ textDecoration: 'none' }}>
                            <StyledButton type={'secondary'} width={'156'}>WHITELIST</StyledButton>
                        </a>
                    }
                </Box>
            </Box>
            <Vector mt={md ? '88px' : 'calc(100vw / 1440 * 88)'}>
                <Box>
                    <Box />
                </Box>
            </Vector>
        </StyledContainer >
    );
};


const PricePanel = styled(Box)`
    flex-wrap : wrap;
    margin : 0 auto;
    @media screen and (max-width : 1350px){
        width : 650px;
    }
    @media screen and (max-width : 700px){
        width : 280px;
    }
`;

const PriceItem = styled(Box)`
    border: 3px solid #FFFFFF;
    filter: drop-shadow(0px 7px 29px rgba(100, 100, 111, 0.2));
    border-radius: 11px;
    display : flex;
    flex-direction : column;
    align-items : center;
    width : 305px;
    font-family : 'Lalezar';
    >div:nth-child(1){
        font-size : 24px;
        margin-top : 13px;
        line-height : 133%;
    }
    >div:nth-child(2){
        width : 60px;
        margin-top : 16px;
    }
    >div:nth-child(3){
        font-size : 35px;
        margin-top : 11px;
        line-height : 91%;
        color : #F4BC5F;
    }
    >div:nth-child(4){
        font-size : 24px;
        line-height : 133%;
    }
    padding-bottom : 35px;
    margin-bottom : 40px;
    @media screen and (max-width : 500px){
        >div:nth-child(1){
            font-size : 16px;
            margin-top : 13px;
        }
        >div:nth-child(2){
            width : 60px;
            margin-top : 16px;
        }
        >div:nth-child(3){
            font-size : 24px;
            margin-top : 11px;
        }
        >div:nth-child(4){
            font-size : 16px;
        }
        padding-bottom : 15px;
        margin-bottom : 20px;
    }
    @media screen and (min-width : 1440px){
        width : calc(100vw / 1440 * 305);
        >div:nth-child(1){
            font-size : calc(100vw / 1440 * 24);
            margin-top :  calc(100vw / 1440 * 13);
        }
        >div:nth-child(2){
            width :  calc(100vw / 1440 * 60);
            margin-top :  calc(100vw / 1440 * 16);
        }
        >div:nth-child(3){
            font-size :  calc(100vw / 1440 * 35);
            margin-top :  calc(100vw / 1440 * 11);
        }
        >div:nth-child(4){
            font-size :  calc(100vw / 1440 * 24);
        }
        padding-bottom :  calc(100vw / 1440 * 35);
        margin-bottom :  calc(100vw / 1440 * 40);
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
    overflow : hidden;
`;


export default PriceScaCity;