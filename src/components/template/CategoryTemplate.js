import Card from "../organism/Card";
import styled from "styled-components";

const CardForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 8%; 
    margin-bottom: 20px;
`;

export default function CategoryTemplate() {
    return (
        <CardForm>
            {[...Array(12)].map((_, index) => (
                <Card key={index} />
            ))}
        </CardForm>
    );
}