import {useState} from "react";
import {Label, Option, SelectBox, SelectOptions} from "../atoms/Select";

export default function GenderSelect()  {
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