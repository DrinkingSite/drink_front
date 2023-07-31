import EmailAddress from "../organism/EmailAddress";
import {Loginbtn} from "../atoms/Login";
import styled from "styled-components";
import SocialLogin, {SocialWrapper} from "../organism/SocialLogin"
import {Inputletter} from "../atoms/Input";
import {Signup} from "../atoms/Login";


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
const SignupContainer=styled.div`
  display:flex;
  flex-direction: row;
  text-align: center;
`

export default function LoginTemplate(){
    return(
        <div>
            <LoginCover>
                <LoginHeader>Login</LoginHeader>
                <LoginContainer>
                    <EmailAddress/>
                    <SocialLogin/>
                        <SignupContainer>
                            <Inputletter style={{marginLeft:"20%"}}>계정이 없으신가요?</Inputletter>
                            <Signup>회원가입하러가기</Signup>

                        </SignupContainer>



                </LoginContainer>
            </LoginCover>

        </div>


    )
}