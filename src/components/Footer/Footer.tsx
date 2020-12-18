import React from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const Footer: React.FC = () => {
    return (
        <StyledContainer >
            <Box>Copyright © 2022 ETH SHIBA. All Rights Reserved.</Box>
            <Socials>
                <a href={'https://ethshiba.io'} target={'_blank'}>
                    <Box>
                        <img src={'/images/footer/earth.png'} width={'100%'} />
                    </Box>
                </a>
                <a href={'https://t.me/ETH_SHIBA_Official'} target={'_blank'}>
                    <Box>
                        <img src={'/images/footer/telegram.png'} width={'100%'} />
                    </Box>
                </a>
                <a href={'https://twitter.com/eth_shiba'} target={'_blank'}>
                    <Box>
                        <img src={'/images/footer/twitter.png'} width={'100%'} />
                    </Box>
                </a>
                <a href={'https://www.instagram.com/eth_shiba/'} target={'_blank'}>
                    <Box>
                        <img src={'/images/footer/instagram.png'} width={'100%'} />
                    </Box>
                </a >
            </Socials >
        </StyledContainer >
    );
}

const Socials = styled(Box)`
    display : flex;
    >a>div{
        width : 30px;
        margin-left : 10px;
        cursor : pointer;
        transition : all 0.3s;
        :hover{
            transform : scale(1.1, 1.1);
        }
    }
    @media screen and (min-width : 1440px){
        >a>div{
            width : calc(100vw / 1440 * 30);
            margin-left : calc(100vw / 1440 * 10);
        }
    }
`;

const StyledContainer = styled(Box)`
    color :white;
    padding : 0 65px;

    height : 80px;
    width : 100%;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 20px 50px -10px rgba(0, 0, 0, 0.2);

    display :flex;
    justify-content : space-between;
    align-items : center;

    >div:nth-child(1){
        font-size : 20px;
        line-height : 160%;
    }
    @media screen and (max-width : 500px){
        >div:nth-child(1){
            font-size : 14px;
        }
    }

    @media screen and (min-width : 1440px){
        padding : 0 calc(100vw / 1440 * 65);
        height : calc(100vw / 1440 * 80);
        >div:nth-child(1){
            font-size : calc(100vw / 1440 * 20);
        }
    }

    @media screen and (max-width : 750px){
        padding : 0 20px;
    }
    @media screen and (max-width : 450px){
        padding : 0 10px;
    }
`;

export default Footer;