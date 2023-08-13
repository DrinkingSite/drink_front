import React, {useState} from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import styled from "styled-components";

const CDatePicker = styled(DatePicker)`
    width:427px;
  height:30px;
  border : 3px solid #B9BBDF;
  border-radius:7px;
  margin-bottom:20px;
  text-align: center;
`

export default function CustomCalender(){
    const [startDate,setStartDate] = useState(new Date())
    return(
        <CDatePicker
            showIcon
            selected={startDate}
            onChange={(date)=>setStartDate(date)}/>

    )
}