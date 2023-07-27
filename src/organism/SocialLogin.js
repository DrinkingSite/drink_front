import HorizonLine from "../atoms/HorizonLine";
import styled from "styled-components";

import {Inputletter} from "../atoms/Input";
import {NaverLoginBtn,NaverLoginTitle,NaverIcon} from "../atoms/Login";
import {KakaoLoginBtn,KakaoLoginTitle,KakaoIcon} from "../atoms/Login";

export const SocialWrapper = styled.div`
  display:flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 40px;
  
`;

export default function SocialLogin(){
    return(
        <div>
            <HorizonLine text="or sign up with"/>
            <SocialWrapper>
                <NaverLoginBtn>
                    <NaverIcon alt="navericon"/>
                    <NaverLoginTitle>네이버로 로그인</NaverLoginTitle>
                </NaverLoginBtn>
                <KakaoLoginBtn>
                    <KakaoIcon alt="navericon"/>
                    <KakaoLoginTitle>카카오로 로그인</KakaoLoginTitle>
                </KakaoLoginBtn>

            </SocialWrapper>


        </div>

        )

}