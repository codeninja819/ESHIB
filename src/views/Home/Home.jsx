import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import HeroSection from "./HeroSection";
import FamSection from "./FamSection";
import MintingFarm from './MintingFarm'
import RoadMap from './RoadMap'
import PriceScacity from './PriceScacity'
import Activation from './Activation'
import Utility from './Utility'
import TeamMember from './TeamMember'
import MeetShiba from './MeetShiba'
import FAQ from './FAQ'
import MintModal from "../../components/MintModal";

const Home = ({ setNotification }) => {

  const [open, setOpen] = useState();
  const whitelistdate = new Date(2022, 6, 29, 6, 40, 0, 0);
  const [date, setDate] = useState(Math.floor(Math.max(whitelistdate - new Date(new Date().toLocaleString('en-us', { timeZone: 'America/New_York' })).getTime(), 0) / 1000))

  return (
    <StyledContainer>
      <MintModal open={open} setOpen={setOpen} setNotification={setNotification} whitelistdate={whitelistdate} />
      <HeroSection setOpen={setOpen} date={date} />
      <FamSection setOpen={setOpen} date={date} />
      <MintingFarm />
      <RoadMap />
      <PriceScacity setOpen={setOpen} date={date} />
      <Activation />
      <Utility />
      <TeamMember />
      <MeetShiba />
      <FAQ />
    </StyledContainer >
  );
};

const StyledContainer = styled(Box)`
  padding : 80px 0px 0px 0px;
  min-height : 100vh;
  @media screen and (min-width : 1440px){
    padding : calc(100vw / 1440 * 80) 0 0 0;
  }
`;


export default Home;