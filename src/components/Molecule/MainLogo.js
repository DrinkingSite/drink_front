import React from 'react';
import styled from 'styled-components';
// import Logo from "/Users/shinhee/drink_front/src/assets/알믈리에흰ver.png"
import Logo from "../../assets/logo.png"

export const LogoContainer = styled.div`
  text-align: center;
  position: relative;
  margin-top:5px;
`;

const LogoImage = styled.img`
  width: 80px; /* 로고의 가로 크기 설정 */
  height: auto;
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%; /* 선의 가로 길이 설정 */
  height: 2px; /* 선의 세로 높이 설정 */
  background-color: #DCD6F7; /* 선의 색상 설정 */
`;

const MainLogo = () => {
    return (
        <LogoContainer>
            <LogoImage src={Logo} alt="로고" />
            <Line />
        </LogoContainer>
    );
};

export default MainLogo;
