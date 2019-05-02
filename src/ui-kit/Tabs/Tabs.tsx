import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import * as Colors from '../Variables/Colors';

import { Text } from '../'

export interface IStyledTitleItem {
  activeTab: string
  name: string
}

const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: minmax(max-content, 5rem) auto;
  grid-row-gap: 1px;
  background: #dddddd54;

  @media only screen and (max-width: 680px) {
    height: 100%;
    width: 100%;

    button {
      position: fixed;
      bottom: 0;
      width: 100%;
      margin-left: -1rem;
      padding: 1rem;
    }
  }
`
const StyledTitle = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 3rem);
  height: 100%;
  background: #f3f3f3;

  @media only screen and (max-width: 680px) {
    display: none;
  }
`
const StyledContent = styled.div`
 
`

const StyledTitleItem = styled(Text)<IStyledTitleItem>`
  cursor: pointer;
  background-color: ${props => props.activeTab === props.name ? Colors.white : Colors.grey}
  color: ${props => props.activeTab === props.name ? Colors.black : Colors.black}
  justify-content: center;
  align-items: center;
  display: grid;
  border-bottom: 1px solid #ddd;
  padding: 0 1rem;
`

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.name)
  const { children, onChange } = props
  const childrenFull = children.filter(elm => elm)
  const onClick = (value) => {
    // setActiveTab(value)
    // if(onChange) onChange(value)
  }
  
  useEffect(() => {
    setActiveTab(props.defaultActivedTab)
  }, [props.defaultActivedTab])

  return (
    <StyledTabs>
      <StyledTitle>
        {childrenFull.map((child) => {
            return (
            <StyledTitleItem
              key={child.props.name}
              activeTab={activeTab}
              name={child.props.name}
              onClick={() => onClick(child.props.name)}>
              {child.props.title}
            </StyledTitleItem>)
          })}
      </StyledTitle>
      <StyledContent>
        {childrenFull.map((child) => {
          if (child.props.name !== activeTab) return undefined;
          return child.props.children;
        })}
      </StyledContent>
    </StyledTabs>
  )
}

export default Tabs;