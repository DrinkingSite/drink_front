import styled from "styled-components";
<<<<<<< HEAD
import Kakao from "../../assets/kakao_icon.png"
import Naver from "../../assets/btnG_완성형.png"
=======
>>>>>>> origin/main
import NaverLogin from "../Molecule/NaverLogin"
import KakaoLogin from "../Molecule/KakaoLogin";

export const SocialWrapper = styled.div`
  display:flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 40px;
  
`;


export default function Login(){

    return(
        <div>
            <SocialWrapper>
                <NaverLogin/>
                <KakaoLogin/>

            </SocialWrapper>


        </div>

        )

}