import styled from "styled-components";
import Login, {SocialWrapper} from "../organism/Login"
import MainLogo, {LogoContainer} from "../Molecule/MainLogo";
import Logo from "../../assets/logo.png";
import React from "react";

export const LogoImage = styled.img`
  width: 200px; /* 로고의 가로 크기 설정 */
  height: auto;
  padding-bottom: 20px;
`;



const LoginCover=styled.div`
  display:flex;
  flex-direction: column;
  width:800px;
  
  margin:30px;
  padding: 100px;
  padding-top:20px;
  border: 2.5px solid;
  border-color: #B9BBDF;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  
`
const LoginHeader = styled.div`
  display:flex;
  font-size : 3rem;
  margin-bottom : 50px;
  font-weight: 350;
  color:#878ECD;
  
`
const LoginContainer=styled.div`
  display:flex;
  flex-direction: column;
  text-align: center;
`

export default function LoginTemplate(){
    return(
        <div>
            <LoginCover>
                <LoginHeader>로그인 / 회원가입</LoginHeader>
                <LoginContainer>
                    <LogoContainer>
                        <LogoImage src={Logo} alt="로고" />
                    </LogoContainer>

                    <Login/>

                </LoginContainer>
            </LoginCover>

        </div>


    )
}