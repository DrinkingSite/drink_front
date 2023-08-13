import { AiOutlineShoppingCart, AiFillCaretRight } from "react-icons/ai";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledCartIcon = styled(AiOutlineShoppingCart)`
  font-size: 24px; 
  position: relative;
  width: 30%;
`;

const StyledArrowIcon = styled(AiFillCaretRight)`
  font-size: 10px; 
  position: relative;
  margin-left: 5px;
  margin-top: 2px;
`;

const IconFormButton = styled.button`
 background-color: white;
 border: 1px solid #D0D5DD;
 border-radius: 4px;
 width: 30%;
 &:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
`

const ButtonForm = styled.button`
 background-color: #F4EEFF;
 border-radius: 4px;
 border: none;
 width: 60%;
 display: flex;
 align-items: center;
 justify-content: center;
 &:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
`

export const CartButton = () => {

    return(<IconFormButton><StyledCartIcon /></IconFormButton>)
}

export const DetailButton = ({ text, to }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(to); 
  };
    return(<ButtonForm onClick={handleClick}>{text}<StyledArrowIcon /></ButtonForm>)
}