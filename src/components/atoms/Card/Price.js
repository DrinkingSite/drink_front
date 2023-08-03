import { styled } from "styled-components";

const StyledPrice = styled.p`
  font-weight: bold;
  font-size: 24px; 
  position: relative;
`;

export const Price = ({ price }) => {
    return (<StyledPrice>{price}</StyledPrice>)
}