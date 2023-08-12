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
