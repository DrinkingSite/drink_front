import styled from 'styled-components'
import {Input, Inputletter} from '../atoms/Input'


export const FormWrapper = styled.div`
  display:flex;
  align-items:flex-start;
  flex-direction: column;
  //width:100%;
  text-align: center;
  
`;


export default function Email(){
    return(
        <FormWrapper>
            <Inputletter>이메일</Inputletter>
            <Input/>

        </FormWrapper>



    )
}


