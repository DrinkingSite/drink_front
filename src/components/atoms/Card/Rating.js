import React from "react";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";

const StyledStarIcon = styled(AiFillStar)`
  color: #D7DF01; 
  font-size: 24px; 
  position: relative;
`;

const StyledParagraph = styled.p`
    display: flex;
    margin: 0px;
`


const Rating = ( { rate }) => {
  return <>
  <StyledParagraph><StyledStarIcon />{rate}</StyledParagraph>
  </>;
};

export default Rating;