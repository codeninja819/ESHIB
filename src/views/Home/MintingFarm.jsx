import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "react-multi-carousel/lib/styles.css";

import AOS from "aos";
import "aos/dist/aos.css";

const responsive = {

    desktop: {
        breakpoint: { max: 10000, min: 1400 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 1400, min: 1000 },
        items: 2
    },
    small: {
        breakpoint: { max: 1000, min: 100 },
        items: 1
    }
};

const MintingFarm = ({ }) => {

    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);

    const md = useMediaQuery("(max-width: 1440px)");
    const sm = useMediaQuery("(max-width: 850px)");
    const xs = useMediaQuery("(max-width: 500px)");

    const carouselItems = [
        {
            image: '/images/home/carousel1.png',
            text: 'ETHSHIBAFAM 1.0 NFT holders will gain access to our exclusive 100% carbon neutral BTC mining farm supporting the Bitcoin blockchain through an expanding mid-scale mining operation. ',
            title: '100%',
            detail: 'Carbon Neutral'
        },
        {
            image: '/images/home/carousel2.png',
            text: 'ETHSHIBAFAM 1.0 NFTs will be able to be staked to receive daily payout of BTC mined through our own facility via a specially designed treasury contract.  ',
            title: 's19a Pro Bitmain machines',
            detail: 'Hardware'
        },
        {
            image: '/images/home/carousel3.png',
            text: 'A portion of BTC mined will also go towards buybacks of $ETHSHIBA and $SHIB burns and also building our own #ETHSHIBAFAM hash rate over time. ',
            title: '1 MW',
            detail: ' Future potential capacity'
        }
    ]

    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
            onMove,
            carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <StyledArrowRight onClick={() => onClick()} >
            <FaChevronRight />
        </StyledArrowRight>
    };

    const CustomLeftArrow = ({ onClick, ...rest }) => {
        const {
            onMove,
            carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <StyledArrowLeft onClick={() => onClick()} >
            <FaChevronLeft />
        </StyledArrowLeft>
    };

    return (
        <StyledContainer>
            <Box mt={md ? '75px' : 'calc(100vw / 1440 * 75)'} textAlign={'center'} fontSize={md ? sm ? xs ? '35px' : '45px' : '60px' : 'calc(100vw / 1440 * 60)'} fontFamily={'Lalezar'} data-aos="fade-up" data-aos-delay="300">
                ETH SHIBA BTC MINING FARM
            </Box>
            <CarouselPanel position={'relative'} data-aos="flip-down" data-aos-delay="300">
                <Carousel
                    renderButtonGroupOutside={true}
                    arrows={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    customRightArrow={<CustomRightArrow />}
                    customLeftArrow={<CustomLeftArrow />}

                >
                    {carouselItems.map((data, i) => {
                        return <CarouselItem>
                            <Box>
                                <img src={data.image} width={'100%'} />
                            </Box>
                            <Box >
                                {data.text}
                            </Box>
                            <Box>
                                <Box color={'#F4BC5F'}>{data.title}</Box>
                                <Box color={'white'}>{data.detail}</Box>
                            </Box>
                        </CarouselItem>
                    })}
                </Carousel>
            </CarouselPanel>
            <Vector mt={md ? '142px' : 'calc(100vw / 1440 * 142)'}>
                <Box>
                    <Box />
                </Box>
            </Vector>
        </StyledContainer >
    );
};

const CarouselPanel = styled(Box)`
    width : 1240px;
    margin : 0 auto;
    @media screen and (max-width : 1400px){
        width : 850px;
    }
    @media screen and (min-width : 1440px){
        width : calc(100vw / 1440 * 1240);
    }
    @media screen and (max-width : 1000px){
        width : 450px;
    }
    @media screen and (max-width : 550px){
        width : calc(100% - 40px);
    }
`;

const CarouselItem = styled(Box)`
    width : 387px;
    >div:nth-child(1){
        width : 100%;
    }
    >div:nth-child(2){
        font-size : 20px;
        margin-top : 5px;
        min-height : 230px;
    }
    >div:nth-child(3){
        font-weight : 700;
        font-size : 20px;
        text-align : center;
    }
    @media screen and (min-width : 1440px){
        width : calc(100vw / 1440 * 387);
        >div:nth-child(2){
            margin-top : calc(100vw / 1440 * 5);
            min-height : calc(100vw / 1440 * 230);
            font-size : calc(100vw / 1440 * 20);
        }
        >div:nth-child(3){
            font-size : calc(100vw / 1440 * 20);
        }
    }
    @media screen and (max-width : 500px){
        >div:nth-child(2){
            font-size : 14px;
            min-height : 150px;
        }
        >div:nth-child(3){
            font-size : 14px;
        }
    }
    @media screen and (max-width : 550px){
        width : 95%;
    }
`;

const StyledContainer = styled(Box)`
    width : 100%;
    color : white;
    padding : 0px 65px;
    position : relative;
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

const StyledArrowLeft = styled(Box)`
    left : -40px;
    top : 100px;
    color : white;
    font-size : 24px;
    position : absolute;
    cursor : pointer;
    background :  rgba(217, 217, 217, 0.5);
    width : 40px;
    height : 40px;
    border-radius : 50%;
    display : flex;
    justify-content :center;
    align-items : center;
    transition : all 0.3s;
    :hover{
        opacity : 0.5;
    }
    @media screen and (min-width : 1440px){
        left : calc(-100vw / 1440 * 40);
        top : calc(100vw / 1440 * 100);
        color : white;
        font-size : calc(100vw / 1440 * 24);
        width : calc(100vw / 1440 * 40);
        height : calc(100vw / 1440 * 40);
    }
    @media screen and (max-width : 500px){
        display : none;
    }
`;

const StyledArrowRight = styled(Box)`
    right : -40px;
    top : 100px;
    color : black;
    font-size : 24px;
    position : absolute;
    cursor : pointer;
    background :  rgba(217, 217, 217, 0.5);
    width : 40px;
    height : 40px;
    border-radius : 50%;
    display : flex;
    justify-content :center;
    align-items : center;
    color : white;
    transition : all 0.3s;
    :hover{
        opacity : 0.5;
    }
    @media screen and (min-width : 1440px){
        right : calc(-100vw / 1440 * 40);
        top : calc(100vw / 1440 * 100);
        color : white;
        font-size : calc(100vw / 1440 * 24);
        width : calc(100vw / 1440 * 40);
        height : calc(100vw / 1440 * 40);
    }
    @media screen and (max-width : 500px){
        display : none;
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

export default MintingFarm;