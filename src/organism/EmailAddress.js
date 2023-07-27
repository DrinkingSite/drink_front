import styled from 'styled-components'
import Email from '../Molecule/Email'
import Password from "../Molecule/Password";
import {Loginbtn} from "../atoms/Login";
import Logomark from "../assets/알믈리에.jpeg"

const Logo = styled.img`
      width:350px;
      height:300px;
      justify-content: center;
      padding-bottom: 10px;
`
const Logindiv = styled.div`
      text-align: center;
      justify-content: center;
      justify-items: center;
`


export default function EmailAddress(){
    return(
        <Logindiv>
            <Logo src={Logomark}/>
            <Email/>
            <Password/>
            <Loginbtn>로그인하기</Loginbtn>
        </Logindiv>

    )
}
