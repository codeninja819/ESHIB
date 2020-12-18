import { useEffect, useState, useRef } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import CheckBox from "../../components/CheckBox/CheckBox";
import { CgEye } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'
import InfoModal from "../../components/InfoModal";
import metadata from '../../abis/_metadata.json'
import { filterScore, getCountScore, getTotalScore } from "../../utils/functions";
import useNFTData from "../../hooks/useNFTData";
import { list } from '../../utils/functions'

const Gallery = ({ showfilter, setShowFilter }) => {

  const lg = useMediaQuery("(min-width: 1800px)");
  const md = useMediaQuery("(max-width : 1000px)");

  const filter = useRef();
  const [open, setOpen] = useState(false);
  const [showcheck, setShowCheck] = useState([]);

  const { totalitems } = useNFTData();

  useEffect(() => {
    document.addEventListener('mouseup', function (event) {
      if (filter && filter.current && !filter.current.contains(event.target)) {
        setShowFilter(false);
      }
    });
  }, []);


  const [checked, setChecked] = useState(Array.from({ length: 12 }, () => Array.from({ length: 12 }, () => null)));
  const [curitem, setCurItem] = useState(0);
  const [items, setItems] = useState([]);

  const onChecked = (i, j) => {
    let temp = [...checked];
    temp[i][j] = !temp[i][j];
    console.log(temp);
    setChecked(temp);
  }

  const onResetChecked = () => {
    let temp = Array.from({ length: 12 }, () => Array.from({ length: 12 }, () => false));
    setChecked(temp);
  }
  useEffect(() => {
    const temp = filterScore(totalitems, checked);
    setItems(temp);
  }, [checked, totalitems])

  return (
    <StyledContainer>
      <InfoModal open={open} setOpen={setOpen} curitem={curitem} />
      <FilterPanel active={showfilter} ref={filter}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Box mb={'7px'}>Filters</Box>
          <Box display={md ? 'block' : 'none'}>
            <AiOutlineClose fontSize={'20px'} cursor={'pointer'} onClick={() => setShowFilter(false)} />
          </Box>
        </Box>
        <CountFilter>
          {list.map((data, i) => {
            return <>
              <FilterItem onClick={() => {
                let temp = [...showcheck];
                temp[i] = !temp[i];
                setShowCheck(temp);
              }}>
                <Box>{data.text}</Box>
                <Box display={'flex'} alignItems={'center'}>
                  <Box mr={lg ? '10px' : '7px'}>{data.attributes.length}</Box>
                  <Box lineHeight={'2px'}><FaChevronDown cursor={'pointer'} /></Box>
                </Box>
              </FilterItem>
              <CheckFilter active={showcheck[i]}>
                {data.attributes.map((attr, j) => {
                  return <Box>
                    <Box display={'flex'} alignItems={'center'}>
                      <CheckBox value={checked[i][j]} onClick={() => onChecked(i, j)} index={j} />
                      <Box ml={lg ? '8px' : '5px'}>{attr.text}</Box>
                    </Box>
                    <Box>{getCountScore(totalitems, i, j)}</Box>
                  </Box>
                })}
              </CheckFilter>
            </>
          })}
        </CountFilter>

        {/* <Box mt={'33px'} fontFamily={'Lalezar'} fontSize={'28px'} lineHeight={'114%'}>Sort</Box>
        <DropDown>
          <Box>Lowest ID</Box>
          <Box lineHeight={'1px'}><FaChevronDown /></Box>
        </DropDown> */}

        <StyledButton onClick={() => onResetChecked()}>
          CLEAR FILTERS
        </StyledButton>

      </FilterPanel>
      <ItemPanel>
        {items.map(data => {
          return <Item>
            <Box>
              <Box>
                {/* <img src={metadata[data].image} width={'100%'} /> */}
                <img src={metadata[data].image} width={'100%'} />
              </Box>
              <Box textAlign={'center'} borderBottom={'1px solid white'}>{metadata[data].name}</Box>
              <Box display={'flex'} alignItems={'center'} width={'fit-content'} margin={'0 auto'}>
                <Box lineHeight={'2px'}><CgEye /></Box>
                <Box lineHeight={'200%'} ml={'8px'} onClick={() => { setCurItem(data); setOpen(true) }}>View More</Box>
              </Box>
              <Score>
                Score: {getTotalScore(data)}
              </Score>
              {/* <Score>
                Coming Soon
              </Score> */}
            </Box>
          </Item>
        })}
        {!items.length ? <NoNFTText>You have not yet minted your <span style={{ color: '#F4BC5F' }}>#ETHSHIBFAM</span> NFTs</NoNFTText> : ''}
      </ItemPanel>
    </StyledContainer >
  );
};

const NoNFTText = styled(Box)`
  margin : 250px auto 0 auto;
  font-size :48px;
  font-weight : 600;
  max-width : 700px;
  text-align : center;
  line-height : 200%;
  @media screen and (min-width : 1440px){
    margin : calc(100vw / 1440 * 250) auto 0 auto;
    font-size : calc(100vw / 1440 * 48);
    max-width : calc(100vw / 1440 * 700);
  }
  @media screen and (max-width : 600px){
    font-size : 30px;
  }
`;


const StyledButton = styled.button`
    font-family : 'Poppins';
    font-weight: 700;

    background: transparent;
    border: 3px solid #F4BC5F;
    border-radius: 8px;
    color : white;

    display : flex;
    justify-content:center;
    align-items: center;

    cursor : pointer;

    margin : 0 auto;
    margin-top : 27px;
    width: 200px;
     height: 50px;
     font-size : 20px;
    
    @media screen and (min-width : 1800px){
      width: 220px;
     height: 56px;
     font-size : 24px;
    }

    @media screen and (min-width : 2200px){
      width: 240px;
     height: 64px;
     font-size : 28px;
    }

    transition : all 0.3s;
    :hover {
        transform : scale(1.05, 1.05);
      }
`;

const Item = styled(Box)`
  >div{
    border: 3px solid #FFFFFF;
    filter: drop-shadow(0px 7px 29px rgba(100, 100, 111, 0.2));
    border-radius: 10px;
    overflow : hidden;
    >div:nth-child(3){
      cursor : pointer;
      padding : 13px 0;
    }
    >div:nth-child(2){
      font-weight : 700;
      font-size : 20px;
      line-height : 160%;
      padding : 16px 0;
    }
    position : relative;
    width : 413px;
    height : fit-content;
    margin : 20px;
    @media screen and (min-width : 1800px){
      >div:nth-child(3){
        font-size : 20px;
      }
      >div:nth-child(2){
        font-size : 24px;
      }
    }
    @media screen and (min-width : 2400px){
      >div:nth-child(3){
        font-size : 24px;
      }
      >div:nth-child(2){
        font-size : 28px;
      }
    }
    @media screen and (max-width : 1000px){
      width : 320px;
    }
    @media screen and (max-width : 400px){
      margin : 10px;
      width : 280px;
    }
  }
  margin : 0 auto;
`;

const ItemPanel = styled(Box)`
  width : calc(100% - 400px);
  display : flex;
  justify-content : space-between;
  flex-wrap : wrap;
  margin-top : -20px;
  @media screen and (min-width : 1800px){
    width : calc(100% - 450px);
   }
   @media screen and (min-width : 2400px){
     width : calc(100% - 500px);
   }
   @media screen and (max-width : 1000px){
    width : 100%;
   }
   @media screen and (max-width : 800px){
    margin-top : 20px;
   }
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

const DropDown = styled(Box)`
  margin-top : 7px;
  display : flex;
  justify-content : space-between;
  padding : 9px 17px;
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  align-items : center;
  cursor : pointer;
`;

const CheckFilter = styled(Box)`
  background: #000E20;
  >div{
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 8px 19px 8px 14px;
  }
  @media screen and (min-width : 1800px){
    >div{
      font-size : 20px;
    }
  }
  @media screen and (min-width : 2400px){
    >div{
      font-size : 24px;
    }
  }
  display : ${({ active }) => active ? 'block' : 'none'};
  overflow : hidden;
`;

const FilterItem = styled(Box)`
  cursor : pointer;
  display : flex;
  justify-content : space-between;
  align-items : center;
  padding : 8px 19px 8px 14px;
  @media screen and (min-width : 1800px){
      font-size : 20px;
  }
  @media screen and (min-width : 2400px){
      font-size : 24px;
  }
`;

const CountFilter = styled(Box)`
  background: #19212B;
  border-radius: 10px;
`;

const FilterPanel = styled.div`
  padding : 16px 24px 44px 24px;
  border: 3px solid #FFFFFF;
  filter: drop-shadow(0px 7px 29px rgba(100, 100, 111, 0.2));
  border-radius: 10px;
  width : 388px;
  height : fit-content;
  transition : all 0.3s;
  @media screen and (min-width : 1800px){
   width : 430px;
   font-size : 20px;
  }
  @media screen and (min-width : 2400px){
    width : 480px;
    font-size : 24px;
  }
  @media screen and (max-width : 1000px){
    opacity : ${({ active }) => active ? '1' : '0'};
    position : fixed;
    width : calc(100% - 20px);
    height : calc(100vh - 120px);
    overflow-y :scroll;
    left: 10px ;
    top : 100px;
    z-index : ${({ active }) => active ? 10 : -1};
    background  : #000813;
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


export default Gallery;