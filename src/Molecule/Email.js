import styled from 'styled-components'
import {Input, Inputletter} from '../atoms/Input'


export const FormWrapper = styled.div`
  display:flex;
  align-items:flex-start;
  flex-direction: column;
  width:400px;
  
`;


export default function Email(){
    return(
        <FormWrapper>
            <Inputletter>Email</Inputletter>
            <Input/>

        </FormWrapper>



    )
}


