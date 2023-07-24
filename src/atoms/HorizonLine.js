import React from "react";
import styled from "styled-components";

const horizontal = styled.div`
        width: 75%;
        text-align: center;
        border-bottom: 1px solid #aaa;
        line-height: 0.1em;
        margin: 10px 0 20px;
`

const line = styled.div`
  background: #fff;
  padding: 0 10px;
  font-size: 15px;
`
const HorizonLine = ({ text }) => {
  return (
      <horizontal>
          <line>{text}</line>
      </horizontal>
  );
};

export default HorizonLine;
