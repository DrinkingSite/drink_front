import styled from "styled-components";
import {useState} from "react";


const SelectBox = styled.div`
  position: relative;
  height: 23px;
  width: 438px;
  padding: 10px;
  margin-bottom:25px;
  border-radius: 7px;
  border : 3px solid #B9BBDF;
  background-color: #ffffff;
  align-self: center;
  //box-shadow: 0px 4px 4px #B9BBDF;
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #B9BBDF;
    font-size: 20px;
  }
`;
const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;
const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 18px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 90px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: #B9BBDF;
  color: black;
`;
const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #F4EEFF;
  }
`
export default function Select()  {
    const [currentValue, setCurrentValue] = useState("성별");
    const [showOptions, setShowOptions] = useState(false);

    const handleOnChangeSelectValue = (e) => {
        const { innerText } = e.target;
        setCurrentValue(innerText);
    };

    return (
        <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
            <Label>{currentValue}</Label>
            <SelectOptions show={showOptions}>
                <Option onClick={handleOnChangeSelectValue}>남</Option>
                <Option onClick={handleOnChangeSelectValue}>여</Option>
            </SelectOptions>
        </SelectBox>
    );
};