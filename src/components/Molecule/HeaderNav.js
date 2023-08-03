import React from "react";
import Button from "../atoms/Button";
import styled from "styled-components";
import { Logo } from "../atoms/Logo";

const NavContainer = styled.div`
  display: flex;
  background: #F4EEFF;
  box-shadow: 0 4px 4px -4px black;
  height: 68px;
  justify-content: space-between;
`;

const LeftButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RightButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;


const HeaderNav = () => {
  return (
    <NavContainer>
      <LeftButtonContainer>
        <Logo />
        <Button text="Home" to={"/"} />
        <Button text="Category" to={"/category"} />
        <Button text="Pricing" />
      </LeftButtonContainer>
      검색
      <RightButtonContainer>
        <Button text="SignIn" to={"/login"} />
        <Button text="SignUp" to={"/login"} />
      </RightButtonContainer>

    </NavContainer>
  );
};

export default HeaderNav;