import React from "react";
import Button from "../atoms/Button";
import styled from "styled-components";

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
                <Button text="Home" to={"/"} />
                <Button text="Category" />
                <Button text="Pricing" />
            </LeftButtonContainer>
            검색
            <RightButtonContainer>
                <Button text="SignIn" to={"/login"} />
                <Button text="SignUp" to={"/join"} />
            </RightButtonContainer>

        </NavContainer>
    );
};

export default HeaderNav;