import Card from "../organism/Card";
import styled from "styled-components";
import CategoryHeader from "../organism/CategoryHeader";

const CardForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 3%; 
    margin: 0 5% 20px 5%;
`;

export default function CategoryTemplate() {
    return (<>
        <CardForm>
            {[...Array(12)].map((_, index) => (
                <Card key={index} />
            ))}
        </CardForm>
        </>);
}