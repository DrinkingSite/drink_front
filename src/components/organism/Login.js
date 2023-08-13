import HorizonLine from "../atoms/HorizonLine";
import styled from "styled-components";
import Kakao from "/Users/shinhee/drink_front/src/assets/kakao_icon.png"
import Naver from "../../assets/btnG_완성형.png"
import NaverLogin from "../Molecule/NaverLogin"

import {Inputletter} from "../atoms/Input";
import {NaverLoginBtn,NaverIcon,NaverLoginTitle} from "../atoms/Loginatom";
import {KakaoLoginBtn,KakaoIcon,KakaoLoginTitle} from "../atoms/Loginatom";

export const SocialWrapper = styled.div`
  display:flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 40px;
  
`;


export default function Login(){
    const REST_API_KEY = 'afff43a568857f12cfa33fb10137c8ad';
    const REDIRECT_URI = 'http://localhost:3000/kakao/callback';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        window.location.href = link;
    };

    return(
        <div>
            <SocialWrapper>
                <NaverLoginBtn>
                    {/*<NaverIcon src={Naver}/>*/}
                    {/*<NaverLoginTitle>네이버로 시작하기</NaverLoginTitle>*/}
                    <NaverLogin/>

                </NaverLoginBtn>

                <KakaoLoginBtn onClick={loginHandler}>
                    <KakaoIcon src={Kakao}/>
                    <KakaoLoginTitle>카카오로 시작하기</KakaoLoginTitle>
                </KakaoLoginBtn>

            </SocialWrapper>


        </div>

        )

}