import Sidebar from "../components/Molecule/Sidebar";
import MyInfo from "../components/Molecule/MyInfo";
import React from "react";
import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        alignItems: flex-start;
  
  
`
export const Sidebarstyle = styled.div`
    flex : 0 0 20%
`



function MyPage(){

    return(
        <Container>
            {/*<Sidebarstyle>*/}
                <Sidebar/>

            {/*</Sidebarstyle>*/}






        </Container>
    )
}

export default MyPage;