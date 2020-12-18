import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

const TeamMember = ({ }) => {

    const md = useMediaQuery("(max-width: 1440px)");
    const sm = useMediaQuery("(max-width: 850px)");
    const xs = useMediaQuery("(max-width: 500px)");

    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);

    const teams = [
        {
            image: '/images/home/team1.jpg',
            name: 'The Shiba King',
            position: 'Founder Dev'
        },
        {
            image: '/images/home/team2.jpg',
            name: 'Eth Shib Hero',
            position: 'Founder Dev'
        },
        {
            image: '/images/home/team3.jpg',
            name: 'Shiba Ninja',
            position: 'NFT Artist'
        },
        {
            image: '/images/home/team4.jpg',
            name: 'Thomas',
            position: 'Lead Blockchain Dev'
        },
        {
            image: '/images/home/team5.jpg',
            name: 'Alpha King',
            position: 'Project Lead'
        },
    ];

    return (
        <StyledContainer>
            <Box mt={md ? '95px' : 'calc(100vw / 1440 * 95)'} textAlign={'center'} fontSize={md ? sm ? xs ? '35px' : '45px' : '60px' : 'calc(100vw / 1440 * 60)'} fontFamily={'Lalezar'} data-aos="fade-up" data-aos-delay="300">
                TEAM MEMBERS
            </Box>
            <TeamMemberPanel>
                {teams.map((data, i) => {
                    return <TeamMemberItem data-aos="zoom-in-up" data-aos-delay={300 * i}>
                        <Box>
                            <img src={data.image} width={'100%'} height={'100%'} />
                        </Box>
                        <Box>{data.name}</Box>
                        <Box>{data.position}</Box>
                    </TeamMemberItem>
                })}
            </TeamMemberPanel>
            <Vector mt={md ? '84px' : 'calc(100vw / 1440 * 84)'}>
                <Box>
                    <Box />
                </Box>
            </Vector>
        </StyledContainer >
    );
};

const TeamMemberItem = styled(Box)`
    border: 3px solid #FFFFFF;
    border-radius : 50%;
    >div:nth-child(1){
        min-width : 112px;
        min-height : 112px;
        width : 112px;
        height : 112px;
        margin-top : 20px;
        border-radius : 50%;
        overflow : hidden;
    }
    >div:nth-child(2){
        font-family : 'Lalezar';
        font-size : 20px;
        line-height : 160%;
        margin-top : 10px;
    }
    >div:nth-child(3){
        font-size : 14px;
        line-height : 229%;
        color : #F4BC5F;
        font-style: italic;
        margin-top : -10px;
        font-weight : 300;
    }
    display : flex;
    align-items : center;
    flex-direction : column;
    width : 220px;
    height : 220px;

    @media screen and (min-width : 1440px){
        >div:nth-child(1){
            width : calc(100vw / 1440 * 112);
            height : calc(100vw / 1440 * 112);
            margin-top : calc(100vw / 1440 * 20);
        }
        >div:nth-child(2){
            font-size : calc(100vw / 1440 * 20);
        margin-top : calc(100vw / 1440 * 10);
        }
        >div:nth-child(3){
            font-size : calc(100vw / 1440 * 14);
            margin-top : calc(-100vw / 1440 * 10);
        }
        width : calc(100vw / 1440 * 220);
        height : calc(100vw / 1440 * 220);
    }
`;

const TeamMemberPanel = styled(Box)`
    display : flex;
    justify-content : space-between;
    margin : 0 auto;
    margin-top : 16px;
    flex-wrap : wrap;
    @media screen and (max-width : 1250px){
        width : 800px;
        >div{
            margin : 0 auto;
            margin-bottom : 40px;
        }
    }
    @media screen and (max-width : 900px){
            width : 600px;
    }
    @media screen and (max-width : 650px){
        width : 300px;
    }
    @media screen and (min-width : 1440px){
        margin-top : calc(100vw / 1440 * 16);
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


export default TeamMember;