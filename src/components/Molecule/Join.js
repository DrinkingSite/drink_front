import styled from 'styled-components'
import {Input, Inputletter} from '../atoms/Input'
import Select from "../atoms/Select";


export const FormWrapper = styled.div`
  display:flex;
  align-items:flex-start;
  flex-direction: column;
  //width:100%;
  text-align: center;
  
`;


export default function join(){
    return(
        <FormWrapper>
            <Inputletter>회원이름</Inputletter>
            <Input/>
            <Inputletter>이메일 주소</Inputletter>
            <Input/>
            <Inputletter>비밀번호</Inputletter>
            <Input/>
            <Inputletter>성별</Inputletter>
            <Select/>
            <Inputletter>생년월일</Inputletter>
            <Input/>
            <Inputletter>휴대전화번호</Inputletter>
            <Input/>


        </FormWrapper>



    )
}


