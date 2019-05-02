import React from 'react';
import styled from 'styled-components'
import * as Colors from '../Variables/Colors'

export interface IText{
  children?: React.ReactNode,
  onClick?: (e: any) => void,
  color?: any,
  isBold?: boolean
}

const Text = styled.span<IText>`
  color: ${(props) => Colors[props.color]};
  font-weight: ${props => props.isBold ? 'bold' : 'normal'};
`

export default Text;