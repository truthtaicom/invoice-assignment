import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import * as Colors from '../Variables/Colors'

export interface IModal {
  isOpen: boolean,
  children: React.ReactNode,
  onClose?: (e: any) => void,
  title?: string
}

export interface StyledModalWrapper {
  isOpen: boolean
}

const StyledModalWrapper = styled.div<StyledModalWrapper>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);

  @media only screen and (max-width: 680px) {
    padding-top: 0;
  }
`

const StyledModalContent = styled.div`
  position: relative;
  background-color: ${Colors.grey2};
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 60%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  animation-name: animatetop;
  animation-duration: 0.4s;
  z-index: 3;

  @-webkit-keyframes animatetop {
    from {top:-300px; opacity:0} 
    to {top:0; opacity:1}
  }
  
  @keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
  }

  @media only screen and (max-width: 680px) {
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
  }
  
`

const StyledModalHeader = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${Colors.primary}
  color: ${Colors.white};
  display: grid;
  grid-template-columns: 3fr 20px;
  align-items: center;
`

const StyledModalClose = styled.span`
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-align: right;

  &:hover, &:focus {
    text-decoration: none;
    cursor: pointer;
  }
`

const StyledModalHeaderTitle = styled.span``

const StyledModalBody = styled.div`
  @media only screen and (max-width: 680px) {
    width: 100%;
    height: 100%;
  }
`

const StyledModalMark = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
`

const Modal: React.FC<IModal> = ({ isOpen, children, onClose, title }) => {
  return isOpen ? ReactDOM.createPortal(
    <StyledModalWrapper isOpen={isOpen}>
      <StyledModalContent>
          {
            title &&
            <StyledModalHeader>
              <StyledModalHeaderTitle>{title}</StyledModalHeaderTitle>
              <StyledModalClose onClick={onClose}>&times;</StyledModalClose>
            </StyledModalHeader>
          }
        <StyledModalBody>
          {children}
        </StyledModalBody>
      </StyledModalContent>
      <StyledModalMark onClick={onClose} />
    </StyledModalWrapper>
    , document.body
  ) : null
}

export default Modal