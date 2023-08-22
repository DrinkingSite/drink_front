import styled from "styled-components";

const StyledCardInform = styled.p`
  margin: 0;
  font-size: 17px;
  width: fit-content;
`;

const CardInform = ({ text }) => {
  return <StyledCardInform>{text}</StyledCardInform>;
};

export default CardInform;