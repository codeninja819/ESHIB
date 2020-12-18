import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = ({ }) => {

    const md = useMediaQuery("(max-width: 1440px)");
    const sm = useMediaQuery("(max-width: 850px)");
    const xs = useMediaQuery("(max-width: 500px)");

    const [details, setDetails] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);

    const faqs = [
        {
            title: 'What is #ETHSHIBAFAM 1.0?',
            details: 'A collection of 1,000 randomly generated NFTs made for our ETH SHIBA family. With each #ETHSHIBAFAM 1.0 NFT sold, you have exclusive ownership stored on the BSC network.'
        },
        {
            title: 'How do I mint my #ETHSHIBAFAM 1.0 NFT?',
            details: 'Jump onto our Minting Page and/or future Marketplace and click through our Gallery, to find which NFT you wish to secure. Having trouble? Jump into our Telegram or Discord to speak to our team.'
        },
        {
            title: 'What will be the mint price?',
            details: 'Mint price will start at 0.8 BNB + gas fees during public sale (determined by the BSC network), for the first 240 NFTs available. All NFTs will be randomly minted, and priced accordingly to each batch totaling 1,000 NFTs. '
        },
        {
            title: 'How many #ETHSHIBAFAM 1.0 NFTs can I mint? ',
            details: 'No maximum has been imposed on either our whitelisted applicants or upon our Public Sale.'
        },
        {
            title: 'Why mint an #ETHSHIBAFAM 1.0 NFT?',
            details: 'Not only will you be apart of our exclusive #ETHSHIBAFAM NFT family, but you will also be apart of and have access to; our future ETH SHIBA DAO, biggest SHIBA Burn in project history and participate in our own exclusive bitcoin mining farm.'
        },
        {
            title: 'What is Bitcoin mining?',
            details: 'Mining is a system that verifies transactions and provides security to the Bitcoin blockchain; it is how new bitcoins enter the market. BTC transactions are pooled together in a "block."'
        },
        {
            title: 'What is the ETH SHIBA Mining Farm?',
            details: 'ETH SHIBA is a strong believer in crypto and the fundamentals of the BTC blockchain. ETHSHIBA is launching its own Bitcoin Mining Farm, which comprises a 100% carbon neutral power supply with the aim to build our projected capacity to 1MW. All #ETHSHIBAFAM 1.0 NFT holders will have the ability to stake their NFTs to participate in our very own BTC Mining Farm. The BTC mined will be distributed to holders, used to buyback $ETHSHIBA and to buy and burn $SHIBA whilst also used to grow our hash rate over time by the acquisition of more mining equipment and infrastructure.'
        },
    ];

    return (
        <StyledContainer>
            <Box mt={md ? '76px' : 'calc(100vw / 1440 * 76)'} textAlign={'center'} fontSize={md ? sm ? xs ? '35px' : '45px' : '60px' : 'calc(100vw / 1440 * 60)'} fontFamily={'Lalezar'}>
                FAQ
            </Box>
            <FAQPanel>
                {faqs.map((data, i) => {
                    return <FAQItem active={details[i]} >
                        <Box data-aos="fade-right" data-aos-delay={300 * i}>
                            <Box style={{ cursor: 'pointer' }} onClick={() => {
                                let temp = [...details];
                                temp[i] = !temp[i];
                                setDetails(temp);
                            }}>
                                <Box>{data.title}</Box>
                                <Box>{details[i] ? <FaChevronUp /> : <FaChevronDown />}</Box>
                            </Box>
                            <Box>{data.details}</Box>
                        </Box>
                    </FAQItem>
                })}
            </FAQPanel>
        </StyledContainer >
    );
};

const FAQItem = styled(Box)`
>div{
    margin-top : 28px;
    >div:nth-child(1){
        font-weight : 700;
        font-size : 30px;
        line-height : 107%;
        display : flex;
        justify-content : space-between;
        align-items : center;
        >div>svg{
            font-size : 20px;
        }
    }
   >div:nth-child(2){
    margin-top : 16px;
    font-size : 20px;
    line-height : 160%;
    height : ${({ active }) => active ? 'fit-content' : '0'};
    overflow : hidden
   }
   border-bottom : 1px solid #FFFFFF;
   padding-bottom : 17px;

   @media screen and (min-width : 1440px){
        margin-top : calc(100vw / 1440 * 28);
        >div:nth-child(1){
            font-size : calc(100vw / 1440 * 30);
            >div>svg{
                font-size : calc(100vw / 1440 * 20);
            }
        }
    >div:nth-child(2){
        margin-top : calc(100vw / 1440 * 16);
        font-size : calc(100vw / 1440 * 20);
    }
    padding-bottom : calc(100vw / 1440 * 17);
   }

   @media screen and (max-width : 600px){
    >div:nth-child(1){
        font-size : 24px;
        line-height : 140%;
        >div>svg{
            font-size : 16px;
        }
    }
    >div:nth-child(2){
        font-size : 16px;
    }
   }
}
`;

const FAQPanel = styled(Box)`
   margin-top : 19px;
   padding-bottom : 65px;
   @media screen and (min-width : 1440px){
    margin-top : calc(100vw / 1440 * 19);
   padding-bottom : calc(100vw / 1440 * 65);
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


export default FAQ;