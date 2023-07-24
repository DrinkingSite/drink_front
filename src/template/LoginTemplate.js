import EmailAddress from "../organism/EmailAddress";
import {Loginbtn} from "../atoms/Login";
import styled from "styled-components";
import SocialLogin from "../organism/SocialLogin"

const LoginCover=styled.div`
  display:flex;
  flex-direction: column;
  width:1000px;
  margin:50px;
  padding: 100px;
  padding-top:20px;
  border: 2.5px solid;
  border-color: #B9BBDF;
  border-radius: 10px;
  
`
const LoginHeader = styled.div`
  display:flex;
  font-size : 3rem;
  border-bottom: 1px solid #B9BBDF;
  margin-bottom : 40px;
  font-weight: 350;
  color:#878ECD;
  
`
const LoginContainer=styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
`

export default function LoginTemplate(){
    return(
        <div>
            <LoginCover>
                <LoginHeader>Login</LoginHeader>
                <LoginContainer>
                    <EmailAddress/>
                </LoginContainer>
            </LoginCover>

        </div>


    )
}