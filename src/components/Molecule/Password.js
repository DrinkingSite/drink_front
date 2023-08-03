import styled from 'styled-components'
import {Input, Inputletter} from '../atoms/Input'
import {FormWrapper} from "./Email";


export default function Password(){
    return(
        <FormWrapper>
            <Inputletter>비밀번호</Inputletter>
            <Input/>

        </FormWrapper>



    )
}


