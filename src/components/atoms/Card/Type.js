import styled from "styled-components";

const TypeName = styled.p`
    color: #64748B;
    margin-bottom: 0px;
    font-size: 14px;
`;


export const Type = ( { type } ) => {
    return(<TypeName>{type}</TypeName>)
}

export default Type;