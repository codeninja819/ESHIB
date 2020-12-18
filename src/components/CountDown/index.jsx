import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import styled from 'styled-components'

let prevtimer = null, count = 0;
export default function CountDown({
    date,
    action
}) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const formatTime = (value) => {
        if (value < 10)
            return '0' + value;
        return value;
    }

    useEffect(() => {
        prevtimer && clearInterval(prevtimer);
        prevtimer = setInterval(function () {
            const temp = Math.max(0, date - count);
            count++;
            setSeconds(formatTime(temp % 60));
            setMinutes(formatTime(Math.floor(temp / 60) % 60));
            setHours(formatTime(Math.floor(temp / 3600) % 24));
            setDays(formatTime(Math.floor(temp / 3600 / 24)));
        }, 1000);
    }, [date])
    return (
        <StyledContainer >
            <Time >{days}</Time>
            <Comma >:</Comma>
            <Time>{hours}</Time>
            <Comma >:</Comma>
            <Time >{minutes}</Time>
            <Comma >:</Comma>
            <Time color={'red'}>{seconds}</Time>
        </StyledContainer>)

}

const Time = styled(Box)`
    width : 100px;
    @media screen and (min-width : 1440px){
        width : calc(100vw / 1440 * 100);
    }
`

const Comma = styled(Box)`
    margin-top : -12px;
    @media screen and (min-width : 1440px){
        margin-top : calc(-100vw / 1440 * 12);
    }
    @media screen and (max-width : 450px){
        margin-top : -6px;
    }
`;

const StyledContainer = styled(Box)`
    display : flex;
    align-items : center;
    justify-content : space-between;
    width : 550px;
    font-size : 80px;
    font-weight : 700;
    >div{
        text-align : center;
    }
    @media screen and (min-width : 1440px){
        width : calc(100vw / 1440 * 550);
        font-size : calc(100vw / 1440 * 80);
    }
    @media screen and (max-width : 750px){
        width : 400px;
        font-size : 56px;
    }
    @media screen and (max-width : 450px){
        width : 300px;
        font-size : 42px;
    }
`;