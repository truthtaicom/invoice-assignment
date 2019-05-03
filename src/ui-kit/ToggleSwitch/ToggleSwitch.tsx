import React, { useState, useEffect } from 'react';
import { IInput } from '../Input/Input'
import styled from 'styled-components'
import * as Colors from '../Variables/Colors';

export interface IToggleSwitch{
  name?: string;
  isOpen?: boolean;
  label?: string;
  onChange: (e: any) => void;
}

export interface IStyledToggleSwitchContent extends IInput {
  isOpen: boolean
}

const StyledToggleSwitch = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr 0.2fr;
  padding: 1rem;
`

const StyledToggleSwitchLabel = styled.label`
  text-align: left;
  align-items: center;
  display: grid;
  padding-right: 0.5rem;
`

const StyledToggleSwitchBody = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`

const StyledToggleSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const StyledToggleSwitchContent = styled.span<IStyledToggleSwitchContent>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Colors.gray80};
  transition: .4s;
  border-radius: 34px;

  ${props => props.isOpen && 
    `
    background-color: ${Colors.blue2};
    box-shadow: 0 0 1px ${Colors.blue2};
    `
  }
  

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;

    transform: ${props => props.isOpen ? 'translateX(26px)' : 'none'};
  }
`

const ToggleSwitch: React.FC<IToggleSwitch> = ({ onChange, isOpen, label, ...props }) => {
  const [value, setValue] = useState(false)

  useEffect(() => {
    setValue(!!isOpen)
  }, [])

  useEffect(() => {
    onChange(value)
  }, [value])

  const onChangeInput = () => {
    setValue(!value)
  }

  return (
    <StyledToggleSwitch>
      {label && <StyledToggleSwitchLabel>{label}</StyledToggleSwitchLabel> }
      <StyledToggleSwitchBody>
        <StyledToggleSwitchInput type="checkbox" defaultChecked={value} onClick={onChangeInput}/>
        <StyledToggleSwitchContent isOpen={value} />
      </StyledToggleSwitchBody>
    </StyledToggleSwitch>
  )
}
export default ToggleSwitch;