import EmailAddress from "../organism/EmailAddress";
import {Loginbtn, Signup} from "../atoms/Loginatom";
import styled from "styled-components";
import Login, {SocialWrapper} from "../organism/Login"
import {Inputletter} from "../atoms/Input";
import {Joinbtn} from "../atoms/Loginatom";


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
                <LoginHeader>로그인</LoginHeader>
                <LoginContainer>
                    <Login/>

                </LoginContainer>
            </LoginCover>

        </div>


    )
}