import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const StyledButton = ({ type, width, height = '50', children, fullWidth, onClick, fontSize = '20', disabled }) => {

    return (
        <>
            {type === 'primary' ?
                <PrimaryButton onClick={onClick} width={width} height={height} fullWidth={fullWidth} fontSize={fontSize} disabled={disabled}>
                    {children}
                </PrimaryButton> :
                <SecondaryButton onClick={onClick} width={width} height={height} fullWidth={fullWidth} fontSize={fontSize} disabled={disabled}>
                    {children}
                </SecondaryButton>
            }
        </>
    );
};

const PrimaryButton = styled.button`
    font-family : 'Poppins';
    font-weight: 700;
    font-size : calc(100vw / 1440 * ${({ fontSize }) => fontSize});
    background: #9915E0;
    border: calc(100vw / 1440 * 3) solid #F4BC5F;
    border-radius: calc(100vw / 1440 * 8);
    color : white;

    display : flex;
    justify-content:center;
    align-items: center;

    cursor : pointer;

    width: ${({ fullWidth, width }) => fullWidth ? '100%' : `calc(100vw / 1440 * ${width})`};
    height: calc(100vw / 1440 * ${({ height }) => height});
    
    @media screen and (max-width : 1440px){
       width: ${({ fullWidth, width }) => fullWidth ? '100%' : `${width}px`};
        height: ${({ height }) => height}px;
        font-size : ${({ fontSize }) => fontSize}px;
        border: 3px solid #F4BC5F;
        border-radius : 8px;

    }
    transition : all 0.3s;
    :hover:not(:disabled) {
        animation: pulse1 1s;
        box-shadow: 0 0 0 2em rgba(255,255,255,0);
        background : #000813;
        transform : scale(1.05, 1.05);
      }
    :disabled{
        cursor : not-allowed;
        opacity : 0.6;
    }
`;

const SecondaryButton = styled.button`
    font-family : 'Poppins';
    font-weight: 700;
    font-size : calc(100vw / 1440 * 20);

    background: transparent;
    border: calc(100vw / 1440 * 3) solid #F4BC5F;
    border-radius: calc(100vw / 1440 * 8);
    color : white;

    display : flex;
    justify-content:center;
    align-items: center;

    cursor : pointer;

    margin : 0 auto;
    width: calc(100vw / 1440 * ${({ width }) => width});
    height: calc(100vw / 1440 * 50);
    
    @media screen and (max-width : 1440px){
       width: ${({ width }) => width}px;
        height: 50px;
        font-size : 20px;
        border: 3px solid #F4BC5F;
        border-radius : 8px;
    }

    transition : all 0.3s;
    :hover {
        animation: pulse2 1s;
        box-shadow: 0 0 0 2em rgba(255,255,255,0);
        transform : scale(1.05, 1.05);
      }
`;

export default StyledButton;