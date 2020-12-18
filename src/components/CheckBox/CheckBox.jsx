import React from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import { BsCheckLg } from 'react-icons/bs'

const CheckBox = ({ value, onClick, index }) => {
    return (
        <StyledContainer onClick={() => onClick(index)} bgcolor = {value ? 'white' : '#000813'}>
            <BsCheckLg display={value ? 'block' : 'none'} color={'#000813'} />
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)`
    width : 14px;
    height : 14px;
    display : flex;
    justify-content : center;
    align-items :center;
    border : 2px solid white;
    border-radius : 2px;
    cursor : pointer;
    @media screen and (min-width : 1800px){
        width : 18px;
        height : 18px;
    }
    @media screen and (min-width : 2400px){
        width : 22px;
        height : 22px;
    }
`;

export default CheckBox;