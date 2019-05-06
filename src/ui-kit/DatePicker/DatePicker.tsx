import React from 'react'
import styled from 'styled-components'
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import * as Colors from '../Variables/Colors'
import { Input } from '../'
import "react-datepicker/dist/react-datepicker.css";

export interface IDatePicker {
  label?: string,
  selectedDate?: any,
  onChange?: (e: any) => void
}

const DatePickerWrapper = styled.div`
  input {
    display: block;
    width: calc(100% - 1.75rem);
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: ${Colors.grey5};
    background-color: ${Colors.white};
    background-clip: padding-box;
    border: 1px solid ${Colors.grey4};
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
`


const DatePicker: React.FC<ReactDatePickerProps & IDatePicker> = ({ selectedDate, ...props}) => {
  return (
    <DatePickerWrapper>
      <Input {...props} selectedDate={selectedDate}>
        <ReactDatePicker {...props} selected={selectedDate} />
      </Input>
    </DatePickerWrapper>
  )
}

export default DatePicker;