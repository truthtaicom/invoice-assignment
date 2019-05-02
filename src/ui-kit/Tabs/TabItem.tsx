import React from 'react';
import styled from 'styled-components'

export interface ITabItem{
  children?: React.ReactNode,
  isActived?: boolean,
  title?: string,
  name?: string
}

const StyledTabItem = styled.div<ITabItem>`
  display: ${props => props.isActived ? 'block' : 'none'}
`

const TabItem: React.FC<ITabItem> = ({ children, isActived }) => {
  return (
    <StyledTabItem isActived={isActived}>
      {children}
    </StyledTabItem>
  )
}

export default TabItem;