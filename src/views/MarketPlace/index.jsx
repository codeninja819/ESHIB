import { useEffect, useState, useRef } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";


const MarketPlace = ({ }) => {


  return (
    <StyledContainer>
      <ComingSoonText>
        Coming Soon for <span style={{ color: '#F4BC5F' }}>#ETHSHIBFAM</span> fam NFTS.
      </ComingSoonText>
    </StyledContainer>
  );
};


const ComingSoonText = styled(Box)`
  max-width : 800px;
  text-align : center;
  font-size : 60px;
  font-weight : 600;
  color : white;
  margin: 0 auto;
  margin-top : 120px;
  @media screen and (min-width : 1440px){
    max-width : calc(100vw / 1440 * 800);
    font-size : calc(100vw / 1440 * 60);
    margin-top : calc(100vw / 1440 * 120);
  }

  @media screen and (max-width : 600px){
    font-size : 48px;
  }
  @media screen and (max-width : 480px){
    font-size : 34px;
  }
`;

const StyledContainer = styled(Box)`
  position : relative;
  padding : 80px 0px 0px 0px;
  min-height : 100vh;
  color :white;
  padding : 125px 65px 111px 65px;

  display : flex;
  justify-content :space-between;

  @media screen and (min-width : 1440px){
      padding : calc(100vw / 1440 * 125) calc(100vw / 1440 * 65) calc(100vw / 1440 * 111) calc(100vw / 1440 * 65);
  }

  @media screen and (max-width : 750px){
    padding : 80px 20px 111px 20px;
  }
  @media screen and (max-width : 450px){
    padding : 80px 10px 111px 10px;
  }
`;
export default MarketPlace;
