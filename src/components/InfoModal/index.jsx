import { useEffect, useState } from "react";
import { Box, Dialog, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai'
import StyledButton from "../StyledButton";
import metadata from '../../abis/_metadata.json'
import { getNFTContract } from "../../utils/contracts";
import { getScore, getTotalScore } from "../../utils/functions";

const InfoModal = ({ open, setOpen, onMint, curitem }) => {

    const lg = useMediaQuery('(min-width:2000px)');
    const sm = useMediaQuery('(max-width:1250px)');
    const xs = useMediaQuery('(max-width:1250px)');

    const properties = [
        {
            title: 'Background',
            detail: metadata[curitem].attributes[0].value,
            score: '+' + getScore(curitem, 0)
        },
        {
            title: 'Body',
            detail: metadata[curitem].attributes[1].value,
            score: '+' + getScore(curitem, 1)
        },
        {
            title: 'Eye',
            detail: metadata[curitem].attributes[2].value,
            score: '+' + getScore(curitem, 2)
        },
        {
            title: 'Eyebrows',
            detail: metadata[curitem].attributes[3].value,
            score: '+' + getScore(curitem, 3)
        },
        {
            title: 'Front Paw',
            detail: metadata[curitem].attributes[4].value,
            score: '+' + getScore(curitem, 4)
        },
        {
            title: 'Back Paw - Right Empty',
            detail: metadata[curitem].attributes[5].value,
            score: '+' + getScore(curitem, 5)
        },
        {
            title: 'Pants',
            detail: metadata[curitem].attributes[6].value,
            score: '+' + getScore(curitem, 6)
        },
        {
            title: 'Clothes',
            detail: metadata[curitem].attributes[7].value,
            score: '+' + getScore(curitem, 7)
        },
        {
            title: 'Back Paw - Left Empty',
            detail: metadata[curitem].attributes[8].value,
            score: '+' + getScore(curitem, 8)
        },
        {
            title: 'Mouth Wear',
            detail: metadata[curitem].attributes[9].value,
            score: '+' + getScore(curitem, 9)
        },
        {
            title: 'Head Wear',
            detail: metadata[curitem].attributes[10].value,
            score: '+' + getScore(curitem, 10)
        },
        {
            title: 'Neck Wear',
            detail: metadata[curitem].attributes[11].value,
            score: '+' + getScore(curitem, 11)
        }
    ];

    const [owner, setOwner] = useState('0x000...00000');

    async function fetchOwner() {
        try {
            const nftContract = getNFTContract();
            const _owner = await nftContract.ownerOf(curitem + 1);
            setOwner(_owner.slice(0, 5) + '....' + _owner.substring(_owner.length - 6, _owner.length - 1))
            console.log(_owner);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchOwner();
    }, [curitem]);

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogPanel>

                <DialogBody>
                    <AttributePanel>
                        <Box >
                            <Box display={'flex'} alignItems={'center'} >
                                <Box mr={'10px'} width={lg ? '32px' : '24px'} height={lg ? '32px' : '24px'}>
                                    <img src={'/images/collection/info.png'} width={'100%'} />
                                </Box>
                                <Box fontSize={lg ? '40px' : sm ? '24px' : '30px'} fontWeight={'700'} lineHeight={'107%'}>Information</Box>
                            </Box>
                            <Box mt={'7px'} fontSize={lg ? '28px' : sm ? '16px' : '20px'} lineHeight={'160%'} fontWeight={600}>{metadata[curitem].name}</Box>
                        </Box>

                        <Box >
                            <Box display={'flex'} alignItems={'center'} >
                                <Box mr={'8px'} width={lg ? '40px' : '32px'} height={lg ? '40px' : '32px'}>
                                    <img src={'/images/collection/description.png'} width={'100%'} />
                                </Box>
                                <Box fontSize={lg ? '40px' : sm ? '24px' : '30px'} fontWeight={'700'} lineHeight={'107%'}>Description</Box>
                            </Box>
                            <Box mt={'13px'} fontSize={lg ? '28px' : sm ? '16px' : '20px'} lineHeight={'160%'} fontWeight={600}>{metadata[curitem].description}</Box>
                        </Box>

                        <Box >
                            <Box display={'flex'} alignItems={'center'} >
                                <Box mr={'12px'} width={'26px'} height={'23px'}>
                                    <img src={'/images/collection/properties.png'} width={'100%'} />
                                </Box>
                                <Box fontSize={lg ? '40px' : sm ? '24px' : '30px'} fontWeight={'700'} lineHeight={'107%'}>Properties</Box>
                            </Box>
                            <PropertiesPanel mt={'22px'} >
                                {properties.map(data => {
                                    return <PropertiesItem>
                                        <Box>{data.title}: <span style={{ color: '#F4BC5F' }}>{data.detail}</span></Box>
                                        <Box mt={'2px'}>Score: {data.score}</Box>
                                    </PropertiesItem>
                                })}
                            </PropertiesPanel>
                        </Box>

                        <Box >
                            <Box display={'flex'} alignItems={'center'} >
                                <Box mr={'8px'} width={lg ? '32px' : sm ? '20px' : '24px'} height={lg ? '29px' : '21px'}>
                                    <img src={'/images/collection/details.png'} width={'100%'} />
                                </Box>
                                <Box fontSize={lg ? '40px' : sm ? '24px' : '30px'} fontWeight={'700'} lineHeight={'107%'}>Details</Box>

                            </Box>
                            <Box fontSize={lg ? '28px' : sm ? '16px' : '20px'} fontWeight={600} lineHeight={'160%'} mt={lg ? '20px' : '12px'}>TokenID: <span style={{ color: '#0448F8' }}>{curitem + 1}</span></Box>
                            <Box fontSize={lg ? '28px' : sm ? '16px' : '20px'} fontWeight={600} lineHeight={'160%'} mt={lg ? '12px' : '5px'}>Owner: <span style={{ color: '#0448F8' }}>{owner}</span></Box>
                        </Box>
                    </AttributePanel>
                    <ImagePanel>
                        <Box width={'100%'} position={'relative'} >
                            <img src={metadata[curitem].image} width={'100%'} />
                            <Score>
                                Score: {getTotalScore(curitem)}
                            </Score>
                            {/* <Score>
                                Coming Soon
                            </Score> */}
                        </Box>
                        <Box pt={'30px'} position={'relative'}>
                            <StyledButton width={'222'} height={'50'}>BUY NOW</StyledButton>
                        </Box>
                    </ImagePanel>
                </DialogBody>
            </DialogPanel>
        </Dialog>
    );
};

const PropertiesItem = styled(Box)`
    background: #19212B;
    border: 2px solid #F4BC5F;
    border-radius: 10px;
    text-align : center;
    width : calc(50% - 20px);
    font-weight: 500;
    font-size: 16px;
    line-height: 200%;
    margin : 0 auto;
    margin-bottom : 16px;
    @media screen and (min-width : 2000px){
        font-size : 24px;
        margin-bottom : 24px;
    }
    @media screen and (max-width : 1250px){
        font-size : 12px;
        margin-bottom : 12px;
    }
    @media screen and (max-width : 550px){
        width : 100%;   
    }
`;

const PropertiesPanel = styled(Box)`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
    padding : 0 15px;
`;

const Score = styled(Box)`
  position : absolute;
  top : 7px;
  right : 7px;
  background: #9915E0;
  border: 3px solid #F4BC5F;
  border-radius: 8px;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  padding : 6px 11px;
  @media screen and (max-width : 600px){
    padding : 4px 6px;
    font-size : 14px;
    border-radius : 4px;
    border-width : 2px;
  }
`;

const AttributePanel = styled(Box)`
    background: #282D3C;
    >div{
        display : flex;
        flex-direction : column;
        align-items : center;
        padding : 18px 0 15px 0;
        border-bottom : 1px solid #F4BC5F;
    }
    >div:last-child{
        border : none;
    }
    padding-bottom : 10px;

    @media screen and (min-width : 2000px){
        >div{
            padding : 28px 0 22px 0;
        }
    }
`;

const ImagePanel = styled(Box)`
    background: #19212B;
    border-bottom: 3px solid #F4BC5F;
    border-bottom-right-radius : 10px;
    border-right: 3px solid #F4BC5F;
    @media screen and (max-width : 1000px){
        border-right : none;
        border-bottom-right-radius : 0px;
        padding-bottom : 40px;
    }
`;

const DialogBody = styled(Box)`
    display : flex;
    >div{
        width : 50%;
    }
    @media screen and (max-width : 1000px){
        flex-direction : column-reverse;
        >div{
            width : 100%;
        }
    }
`;


const DialogPanel = styled(Box)`
    width : calc(100vw - 64px);
    max-width : 1310px;
    border-radius: 10px;
    color : white;
    font-family : 'Poppins';
    @media screen and (min-width : 2000px){
        max-width : 1800px;
    }
    @media screen and (max-width : 1000px){
        max-width : 500px;
        margin : 0 auto;
    }
    @media screen and (max-width : 550px){
        width : calc(100vw - 20px);
    }
`;

export default InfoModal;