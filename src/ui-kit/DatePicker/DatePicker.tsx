import React from 'react'
import styled from 'styled-components'
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { Input } from '../'
import "react-datepicker/dist/react-datepicker.css";

export interface IDatePicker {
  label?: string
}

const DatePickerWrapper = styled.div`
  input {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
`


const DatePicker: React.FC<ReactDatePickerProps & any> = (props) => {
  return (
    <DatePickerWrapper>
      <Input {...props}>
        <ReactDatePicker {...props} selected={props.selectedDate} />
      </Input>
    </DatePickerWrapper>
  )
}

export default DatePicker;