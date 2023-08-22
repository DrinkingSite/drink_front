import { CardImage } from "../atoms/Card/CardImage";
import CardContent from "../Molecule/CardContent";
import { styled } from "styled-components";
import DetailCardContent from "../Molecule/DetailCardContent";

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

const LeftForm = styled.div`

`

const RightForm = styled.div`

`

export default function DetailCard() {
  return (
    <CenteredContainer>
        <LeftForm>
            
        </LeftForm>
        <CardImage />
        <DetailCardContent />
    </CenteredContainer>
  );
}
