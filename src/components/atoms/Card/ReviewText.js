import styled from "styled-components";

export const CustomText = styled.p`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 14px;
  width: fit-content;
  font-weight: bold;

`

const ReviewText = ({ text }) => {
    return(<CustomText>리뷰 {text}</CustomText>)
}

export default ReviewText;