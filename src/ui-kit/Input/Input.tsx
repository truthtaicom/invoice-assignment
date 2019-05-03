import React, { useState, useEffect } from 'react';
import { Text } from '../'
import styled from 'styled-components'
import * as Colors from '../Variables/Colors'

export interface IInput {
  label?: string
  name?: string,
  type?: string,
  onChange?: (e: any) => void,
  defaultValue?: string,
  placeholder?: string,
  value?: string,
  selectedDate?: string,
  unit?: string,
  isFormat?: boolean
}

export interface IStyledInputWrapper {
  isActived? : boolean,
  isExtandHeader?: boolean,
  isExtandContent?: boolean,
}

const StyledInput = styled.div<IStyledInputWrapper>`
  display: grid;
  grid-template-rows: ${props => props.isActived ? '1fr 1fr' : '1fr' }; 
  padding: 1rem;
`

const StyledInputWrapper = styled.div<IStyledInputWrapper>`
  display: ${props => props.isActived ? 'grid' : 'none'};
  grid-template-columns: 0.8fr 1fr 0.2fr;
  transition: all 0.5s;
  cursor: pointer;

  padding: 1rem;
  background: #ddd;

  @media only screen and (min-width: 680px) {
    ${props => props.isExtandHeader ? 'display: none;' : 'display: grid;'}
    ${props => props.isExtandContent ? 'display: grid;' : 'display: none;'}
  }
`

const StyledLabel = styled.label`
  text-align: left;
  align-items: center;
  display: grid;
  padding-right: 0.5rem;
`
const StyledLabel2ndMobile = styled.span`
  display: contents;

  @media only screen and (min-width: 680px) {
    display: none;
  }
`

const StyledInputContent = styled.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${Colors.black};
  background-color: ${Colors.white};
  background-clip: padding-box;
  border: 1px solid ${Colors.grey};
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  width: calc(100% - 1.75rem);
`

const Input: React.FC<IInput> = ({ label, children, ...props }) => {
  const [value, setValue] = useState()

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const onChange = (e) => {
    let _value = e.target.value;
    if(props.isFormat && _value.length) {
      _value = parseInt(_value, 10)
    }
    setValue(_value)
    props.onChange && props.onChange(e)
  }

  useEffect(() => {
    setValue(props.value || props.defaultValue)
  }, [props.value, props.defaultValue])

  useEffect(() => {
    if(props.isFormat && value) {
      setValue(value.toLocaleString())
    }
  }, [value, props.isFormat])

  useEffect(() => {
    if(props.selectedDate) {
      setValue(new Date(props.selectedDate).toISOString().slice(0,10))
    }
  }, [props.selectedDate])

  return (
    <StyledInput isActived={isOpen}>
      <StyledInputWrapper onClick={toggle} isActived isExtandHeader>
        <Text>{label}</Text>
        <Text>{ value } {props.unit}</Text>
        <Text>{ isOpen ? '-' : '+'}</Text>
      </StyledInputWrapper>
      <StyledInputWrapper isActived={isOpen} isExtandContent>
        {label && <StyledLabel> <StyledLabel2ndMobile>Enter </StyledLabel2ndMobile>  {label}</StyledLabel>}
        { children ? children : <StyledInputContent {...props} onChange={onChange} /> }
      </StyledInputWrapper>
    </StyledInput>
  )
}

export default Input;