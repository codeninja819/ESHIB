import { AppBar, Toolbar, Box, Button, SvgIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ConnectMenu from "./ConnectMenu.jsx";
import styled from 'styled-components'
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from "react-icons/ai";
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitter, FaTelegram, FaFacebook } from 'react-icons/fa';
import "./topbar.scss";


function TopBar({ theme, setNotification, setShowFilter }) {
  const md = useMediaQuery("(max-width: 1250px)");
  const normal = useMediaQuery("(max-width: 1440px)");
  const [hamburgeropen, setHamburgerOpen] = useState(false);

  const dialog = useRef();
  const hamburger = useRef();

  useEffect(() => {
    document.addEventListener('mouseup', function (event) {
      if (dialog && dialog.current && !dialog.current.contains(event.target)) {
        setHamburgerOpen(false);
      }
    });
  }, []);


  return (
    <StyledContainer >
      <Box>
        <Menus>
          <Link to={'/'}><Box>HOME</Box></Link>
          <Link to={'/collection'}><Box>MY COLLECTION</Box></Link>
          <Link to={'/gallery'}><Box>GALLERY</Box></Link>
          <Link to={'/marketplace'}><Box>MARKETPLACE</Box></Link >
        </Menus >
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>
        <Box display={md ? 'none' : 'block'}>
          <ConnectMenu setNotification={setNotification} />
        </Box>
        <Hamburger><GiHamburgerMenu onClick={() => setHamburgerOpen(true)} cursor={'pointer'} /></Hamburger>
        <HamburgerMenu ref={dialog} active={hamburgeropen}>
          <Box width={'none'} onClick={() => setHamburgerOpen(false)}>
            <AiOutlineClose color={'white'} cursor={'pointer'} fontSize={normal ? '20px' : 'calc(100vw / 1440 * 20)'} />
          </Box>
          <StyledMenus>
            <Link to={'/'} onClick={() => setHamburgerOpen(false)}>
              HOME
            </Link>
            <Link to={'/collection'} onClick={() => setHamburgerOpen(false)}>
              MY COLLECTION
            </Link>
            <Link to={'/gallery'} onClick={() => setHamburgerOpen(false)}>
              GALLERY
            </Link>
            <Link to={'/marketplace'} onClick={() => setHamburgerOpen(false)}>
              MARKETPLACE
            </Link>
            {window.location.href.includes('collection') || window.location.href.includes('gallery') ? <Link onClick={() => {
              setHamburgerOpen(false)
              setShowFilter(true);
            }}>
              FILTER
            </Link> : ''}
          </StyledMenus>
          <Box mt={normal ? '20px' : 'calc(100vw / 1440 * 20)'} onClick={() => setHamburgerOpen(false)}><ConnectMenu setNotification={setNotification} isBig /></Box>
          <Socials >
            <FaTwitter />
            <AiFillInstagram />
            <FaTelegram />
            <FaFacebook />
          </Socials>
        </HamburgerMenu>
      </Box>
    </StyledContainer >
  );
}

const StyledMenus = styled(Box)`
width : fit-content;
  display : flex;
  flex-direction : column;
  >a{
    font-size : 40px;
    font-weight : 900;
    text-decoration : none;
    color : white;
    margin-top : 30px;
    transition : all 0.3s;
    :hover{
      color : #F4BC5F;
    }
    @media screen and (max-width : 370px){
      font-size : 32px;
    }
  }
`;

const HamburgerMenu = styled.div`
  flex-direction : column!important;
  align-items : unset!important;
  position : fixed;
  width : 100%;
  height : 100vh;
  max-width : 600px;
  background-color : rgba(6, 36, 60, 0.8);
  right : ${({ active }) => active ? '0px' : '-600px'};
  top : 0px;
  >div{
    padding-top : 25px;
    padding-left : 20px;
    padding-right : 20px;
  }
  >div:nth-child(2){
    padding-top : 20px;
  }
  transition : all 0.5s ease-out;
`;

const Socials = styled(Box)`
  color : white;
  font-size : 30px;
  display : flex;
  position : absolute;
  bottom : 30px;
  >svg{
    margin-right : 20px;
    cursor : pointer;
  }
`;

const Hamburger = styled(Box)`
  display : none;
  color : white;
  line-height : 2px;
  font-size : 48px;
  transition : all 0.3s;
  :hover{
    color : #F4BC5F;
  }
  width : 100%;
  @media screen and (max-width : 1250px){
    display : flex;
    justify-content : end;
    width : fit-content;
  }
`;

const Menus = styled(Box)`
  >a{
    text-decoration : none;
    cursor : pointner;
    >div{
      color : white;
      margin-right: 27px;
      transition : all 0.3s;
      :hover{
        color : #F4BC5F;
      }
    }
  }
  display :flex;
  @media screen and (max-width : 1250px){
    display : none;
  }
`;

const Logo = styled(Box)`
  position : absolute;
  background-image : url('/logo.png');
  background-size : 100% 100%;
  width : 66px;
  height : 70px;
  top : 5px;
  left : calc(50% - 33px);
  @media screen and (max-width : 1250px){
    left : 0;
  }
  @media screen and (min-width : 1440px){
    width : calc(100vw / 1440 * 66);
    height : calc(100vw / 1440 * 70);
    top : calc(100vw / 1440 * 5);
    left : calc(50% - 100vw / 1440 * 33);
  }
`;

const StyledContainer = styled(Box)`
  width : 100%;
  background: rgb(25,32,42);
  box-shadow: 0px 20px 50px -10px rgba(0, 0, 0, 0.2);
  position : fixed;
  top : 0;
  left : 0;
  height : 80px;
  padding : 0px 64px;
  @media screen and (max-width : 600px){
    padding : 0px 20px;
  }
  >div{
    padding : 15px 0;
    display : flex;
    justify-content : space-between;
    align-items : center;
    font-size : 20px;
    line-height : 32px;
    font-weight : 700;
    position : relative;
  }
  z-index : 10;

  @media screen and (min-width : 1440px){
    height : calc(100vw / 1440 * 80);
    padding : 0px calc(100vw / 1440 * 64);
    >div{
      padding : calc(100vw / 1440 * 15) 0;
      font-size : calc(100vw / 1440 * 20);
      line-height : calc(100vw / 1440 * 32);
    }
  }
`;


export default TopBar;
