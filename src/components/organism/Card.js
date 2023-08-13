import { CardImage } from "../atoms/Card/CardImage";
import CardContent from "../Molecule/CardContent";
import { styled } from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  `;

const CardForm = styled.div`
  border: 1px solid #F4EEFF;
  padding: 15px;
  border-radius: 5px;
`;

export default function Card() {
  return (
    <CenteredContainer>
      <CardForm>
        <CardImage />
        <CardContent />
      </CardForm>
    </CenteredContainer>
  );
}
