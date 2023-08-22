import styled from "styled-components";

import DetailCard from "../organism/DetailCard";

const CardForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 3%; 
    margin: 0 5% 20px 5%;
`;

export default function DetailTemplate() {
    return (<>
        <DetailCard />
        </>);
}