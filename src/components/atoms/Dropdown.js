import styled from "styled-components";

const CustomDropdown = styled.select`
  padding: 10px;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Dropdown = () => {
    return(<>
    <CustomDropdown>
        <option>별점순</option>
        <option>리뷰순</option>
        <option>판매순</option>
    </CustomDropdown>
    </>)
}

export default Dropdown;