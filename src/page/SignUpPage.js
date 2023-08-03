import LoginTemplate from "../components/template/LoginTemplate";
import styled from "styled-components";
import SignupTemplate from "../components/template/SignupTemplate";

const LoginCover = styled.div`
  marign:50px;
  display:flex;
  justify-content: center;
  padding:20px;
 
  
`

export default function SignUpPage(){
    return(
        <LoginCover>
            <SignupTemplate/>

        </LoginCover>

    )
}