import { useEffect, useState } from "react";
import { Box, Button, SvgIcon, Typography, Popper, Paper, Divider, Link, Slide, Fade } from "@material-ui/core";
import { useAddress, useWeb3Context } from "src/hooks/web3Context";
import styled from 'styled-components'

function ConnectMenu({ isBig, setNotification }) {
  const { connect, disconnect, connected, web3, chainID } = useWeb3Context();
  const address = useAddress();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isConnected, setConnected] = useState(connected);

  let ellipsis = address
    ? 'DISCONNECT'
    : "CONNECT WALLET";

  let buttonText = "CONNECT WALLET";
  let clickFunc = connect;

  function onConnect() {
    connect().then(msg => {
      if (msg.type === 'error') {
        setNotification(msg)
      }
    });
  }

  if (isConnected) {
    buttonText = ellipsis;
    clickFunc = disconnect;
  }


  useEffect(() => {
    setConnected(connected);
  }, [web3, connected]);

  return (
    <div
      className="wallet-menu"
      id="wallet-menu"
    >
      <ConnectButton
        isBig={isBig}
        onClick={() => isConnected ? disconnect() : onConnect()}      >
        {buttonText}
      </ConnectButton>


    </div>
  );
}

const ConnectButton = styled(Box)`
      padding : ${({ isBig }) => isBig ? '15px 36px' : '9px 20px'};
    width : fit-content;
    border: 3px solid #F4BC5F;
    border-radius: 8px;
    display : flex;
    justify-content :center;
    align-items : center;
    font-weight: 700;
    font-size: ${({ isBig }) => isBig ? '32px' : '20px'};
    line-height: 32px;
    cursor : pointer;
    color : white;
    transition: all .5s ease-in-out;

    background : linear-gradient(to right,rgb(25,32,42),rgb(25,32,42),#F4BC5F);
    background-size: 300% 100%;

    :hover{
      background-position : 98% 0;
    }

    @media screen and (max-width : 410px){
      font-size : 24px;
      padding : 9px 20px;
    }

    @media screen and (min-width : 1440px){
      padding : ${({ isBig }) => isBig ? 'calc(100vw / 1440 * 15) calc(100vw / 1440 * 36)' : 'calc(100vw / 1440 * 9) calc(100vw / 1440 * 20)'};
      border: calc(100vw / 1440 * 3) solid #F4BC5F;
      border-radius: calc(100vw / 1440 * 8);
      font-size: ${({ isBig }) => isBig ? 'calc(100vw / 1440 * 32)' : 'calc(100vw / 1440 * 20)'};
      line-height: calc(100vw / 1440 * 32);
    }
`;


export default ConnectMenu;
