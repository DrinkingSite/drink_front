import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
  background: #fff;
  padding: 0 10px;
  margin-right: 10px;
  border-radius: 10px;
  border: none;
  background: #F4EEFF;
  font-size: 14px;
  height: 100%;
  &:hover {
    background-color: #ffffff;
  }
  &:active {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

const Button = ({ text, to }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(to); 
  };

  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default Button;