import LoginTemplate from "../components/template/LoginTemplate";
import styled from "styled-components";

const LoginCover = styled.div`
  marign:50px;
  display:flex;
  justify-content: center;
  padding:20px;
 
  
`

export default function LoginPage(){
    return(
        <LoginCover>
            <LoginTemplate/>

        </LoginCover>

    )
}