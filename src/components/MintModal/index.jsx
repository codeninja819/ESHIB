import { useEffect, useState } from "react";
import { Box, Dialog, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai'
import StyledButton from "../../components/StyledButton";
import { getNFTContract } from "../../utils/contracts";
import { useAddress } from "../../hooks/web3Context";
import { useWeb3Context } from "../../hooks/web3Context";
import { ethers } from "ethers";
import useNFTData from "../../hooks/useNFTData";

const MintModal = ({ open, setOpen, setNotification, whitelistdate }) => {

    const lg = useMediaQuery('(min-width:1440px)');
    const sm = useMediaQuery('(max-width:650px)');

    const [amount, setAmount] = useState(1);
    const [pending, setPending] = useState(false);
    const [price, setPrice] = useState(0);

    const account = useAddress();
    const { mintedCount } = useNFTData();

    const { connect, hasCachedProvider, provider } = useWeb3Context();

    const onMint = async () => {
        setPending(true);
        try {
            // if (Math.floor(Math.max(whitelistdate - new Date(new Date().toLocaleString('en-us', { timeZone: 'America/New_York' })).getTime(), 0) / 1000) !== 0) {
            //     setNotification({ type: 'error', title: 'Minting', detail: 'Minting not started yet' })
            //     return;
            // }
            if (!account) {
                setNotification({ type: 'error', title: 'Connection', detail: 'Please connect your wallet' })
                setPending(false);
                return;
            }
            const nftContract = getNFTContract(provider.getSigner());
            const tx = await nftContract.mintBatch(account, amount, { value: ethers.utils.parseEther(price.toString()) });
            await tx.wait();
        }
        catch (error) {
            console.log(error);
            figureError(error);
        }
        setPending(false);
    }

    const processFee = () => {
        let tamount = Number(amount + mintedCount);
        let _amount = Number(amount);
        let totalFee = 0;
        let fees = [8, 10, 12, 16];
        for (let i = 3; i >= 0; i--) {
            if (i == 0) {
                totalFee = totalFee + _amount * fees[i];
                break;
            }
            if (tamount < i * 250) continue;
            let ramount = tamount - i * 250;
            if (ramount > _amount) {
                totalFee = totalFee + _amount * fees[i];
                _amount = 0;
            } else {
                tamount = i * 250;
                _amount -= ramount;
                totalFee = totalFee + ramount * fees[i];
            }
            if (_amount == 0) break;
        }
        return totalFee / 10;
    }

    const configureFee = () => {
        let tamount = Number(amount + mintedCount);
        let fees = [0.8, 1, 1.2, 1.6];
        if (tamount > 750) return fees[3];
        else if (tamount > 500) return fees[2];
        else if (tamount > 250) return fees[1];
        else return fees[0];
    }
    useEffect(() => {
        setPrice(processFee());
    }, [amount, mintedCount])

    const figureError = (error) => {
        if (error.code === "UNPREDICTABLE_GAS_LIMIT") {
            const list = error.message.split(',');
            for (let i = 0; i < list.length; i++) {
                if (list[i].includes('message')) {
                    let msg = String(list[i]).replaceAll('"', '');
                    msg.replaceAll('"\"', '');
                    msg.replaceAll('message:', '');
                    msg.replaceAll('}', '');
                    if (msg.includes('insufficient funds')) {
                        setNotification({ type: 'error', title: 'Error', detail: 'There is no enough balance' });
                    }
                    else
                        setNotification({ type: 'error', title: msg.split(':')[1].toUpperCase(), detail: msg.split(':')[2] })
                    break;
                }
            }
        }
        else
            setNotification({ type: 'error', title: 'Error', detail: error.message })
    }

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogPanel>
                <DialogHeader>
                    <CloseButton onClick={() => setOpen(false)}><AiOutlineClose /></CloseButton>
                    <Box fontFamily={'Lalezar'} fontSize={lg ? 'calc(100vw / 1440 * 30)' : sm ? '16px' : '30px'} lineHeight={'160%'}>COLLECT  &  MINT  YOUR  NFTS  NOW</Box>
                </DialogHeader>
                <DialogBody>
                    <Box>
                        <img src={'/images/home/team3.jpg'} width={'100%'} />
                    </Box>
                    <Box mt={'20px'}>
                        <Box>
                            <Box>Remaining</Box>
                            <Box>{mintedCount}/1000</Box>
                        </Box>
                        <Box>
                            <Box>Price</Box>
                            <Box>{price} BNB</Box>
                        </Box>
                        <Box>
                            <Box>Quantity</Box>
                            <Box display={'flex'}>
                                <Box mr={'20px'} onClick={() => setAmount(Math.max(1, amount - 1))}>-</Box>
                                <input type={'text'} value={amount} onChange={(e) => {
                                    if (e.target.value / 1 < 1 || e.target.value / 1 > 1000 - mintedCount) return;
                                    setAmount(e.target.value / 1)
                                }} />
                                <Box ml={'20px'} onClick={() => setAmount(Math.min(1000 - mintedCount, amount + 1))}>+</Box>
                            </Box>
                            <Box textAlign={'right'}>{configureFee()} BNB</Box>
                        </Box>
                        <Box width={'100%'}>
                            <StyledButton fullWidth type={'primary'} fontSize={sm ? '14' : '20'} height={sm ? '35' : '50'} onClick={() => onMint()} disabled={pending}>
                                MINT NOW
                            </StyledButton>
                        </Box>
                    </Box>
                    <Box fontSize={lg ? 'calc(100vw / 1440 * 26)' : sm ? '14px' : '18px'} lineHeight={'178%'} fontWeight={500} textAlign={'center'}>
                        Public mint: <span style={{ color: '#F4BC5F' }}>Live</span>
                    </Box>
                </DialogBody>
            </DialogPanel>
        </Dialog>
    );
};

const DialogBody = styled(Box)`
    margin-top : 37px;
    >div:nth-child(1){
        width : 300px;
        height : 300px;
        margin : 0 auto;
    }
    >div:nth-child(2)>div{
        display : flex;
        justify-content : space-between;
        border-bottom: 1px solid rgba(255, 255, 255, 0.34);
        font-weight: 600;
        font-size: 24px;
        line-height: 133%;
        padding : 26px 0 23px 0;
    }
    >div:nth-child(2)>div:last-child{
        border-bottom : none;
    }
    >div:nth-child(2)>div:nth-child(3){
        align-items : center;
        padding : 0;
        >div{
            align-items : center;
        }
        >div>div{
            cursor : pointer;
        }
        >div>input{
            padding : 26px 0 23px 0;
            border-width: 0px 1px;
            border-style: solid;
            border-color: rgba(255, 255, 255, 0.34);
            background : transparent;
            color : white;
            font-size : 24px;
            font-weight : 600;
            font-family : 'Poppins';
            width : 100px;
            text-align : center;
        }
    }
    @media screen and (min-width : 1440px){
        margin-top : calc(100vw / 1440 * 37);
        >div:nth-child(1){
            width : calc(100vw / 1440 * 300);
            height : calc(100vw / 1440 * 300);
        }
        >div:nth-child(2)>div{
            border-bottom: calc(100vw / 1440 * 1) solid rgba(255, 255, 255, 0.34);
            font-size: calc(100vw / 1440 * 24);
            padding : calc(100vw / 1440 * 26) 0 calc(100vw / 1440 * 23) 0;
        }
        >div:nth-child(2)>div:nth-child(3){
            >div>input{
                padding : calc(100vw / 1440 * 26) 0 calc(100vw / 1440 * 23) 0;
                font-size : calc(100vw / 1440 * 24);
                width : calc(100vw / 1440 * 100);
            }
        }
    }
    @media screen and (max-width : 650px){
        margin-top : 20px;
        >div:nth-child(1){
            width : 300px;
            height : 300px;
        }
        >div:nth-child(2)>div{
            border-bottom: 2px solid rgba(255, 255, 255, 0.34);
            font-size: 18px;
            padding : 16px 0 16px 0;
        }
        >div:nth-child(2)>div:nth-child(3){
            >div>input{
                border-width: 0px 3px;
                padding : 16px 0 16px 0;
                font-size : 18px;
                width : 65px;
            }
        }
    }

    @media screen and (max-width : 450px){
        margin-top : 20px;
        >div:nth-child(1){
            width : 250px;
            height : 250px;
        }
        >div:nth-child(2)>div{
            border-bottom: 2px solid rgba(255, 255, 255, 0.34);
            font-size: 14px;
            padding : 12px 0 12px 0;
        }
        >div:nth-child(2)>div:nth-child(3){
            >div>input{
                border-width: 0px 3px;
                padding : 12px 0 12px 0;
                font-size : 14px;
                width : 50px;
            }
        }
    }
`;

const CloseButton = styled(Box)`
    position : absolute;
    right : 0;
    top : 0;
    color : #F4BC5F;
    cursor : pointer;
    font-size : 28px;
    :hover{
        opacity : 0.6;
    }
    margin-top : 3px;
    @media screen and (min-width : 1440px){
        font-size : calc(100vw / 1440 * 28);
    }
    @media screen and (max-width : 650px){
        font-size : 18px;
        margin-top : -1px;
    }
    @media screen and (max-width : 450px){
        font-size : 16px;
        margin-top : 0px;
    }
`;

const DialogHeader = styled(Box)`
    position : relative;
    display : flex;
    justify-content : center;
`;

const DialogPanel = styled(Box)`
    width : calc(100vw - 64px);
    max-width : 720px;
    padding : 33px 54px 22px 54px;
    background: linear-gradient(180deg, #19212B 0%, #000409 100%);
    border: 3px solid #F4BC5F;
    border-radius: 30px;
    color : white;
    font-family : 'Poppins';
    @media screen and (min-width : 1440px){
        max-width : calc(100vw / 1440 * 720);
        padding : calc(100vw / 1440 * 33) calc(100vw / 1440 * 54) calc(100vw / 1440 * 22) calc(100vw / 1440 * 54);
        border:  calc(100vw / 1440 * 3) solid #F4BC5F;
    border-radius:  calc(100vw / 1440 * 30);
    }
    @media screen and (max-width : 650px){
        padding : 33px 30px 22px 30px;
    }
    @media screen and (max-width : 450px){
    width : calc(100vw - 20px);
        padding : 20px 10px 16px 10px;
    }
`;

export default MintModal;