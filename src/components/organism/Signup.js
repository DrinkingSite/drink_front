import styled from 'styled-components'
import Email from '../Molecule/Email'
import Password from "../Molecule/Password";
import {Loginbtn} from "../atoms/Loginatom";
import Logomark from "../../assets/알믈리에흰ver.png"
import Join from "../Molecule/Join"

const Logo = styled.img`
      width:300px;
      height:auto;
      justify-content: center;
      padding-bottom: 10px;
`
const Logindiv = styled.div`
      text-align: center;
      justify-content: center;
      justify-items: center;
`


export default function Signup(){
    return(
        <Logindiv>
            <Join/>
            <Loginbtn>가입하기</Loginbtn>
        </Logindiv>

    )
}
