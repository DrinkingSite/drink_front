import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
  border-radius: 10px;
  margin: 5px;
  border: none;
  background: #ffffff;
  font-size: 14px;
  height: 90%;
  &:hover {
    background-color: #F4EEFF;
  }
  &:active {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

const TabBtn = ({ text, to }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(to); 
  };

  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default TabBtn;