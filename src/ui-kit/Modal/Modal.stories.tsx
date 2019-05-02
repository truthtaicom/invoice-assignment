import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../'
import Modal from './Modal'


function ModalPlayground() {
  const [state, setState] = useState(false)
  const toggleModal = () => {
    console.log("okkkk")
    setState(!state)
  }
  return (
    <>
      <Button color='primary' onClick={toggleModal}>Open modal</Button>
      <Modal title="Modal Header" isOpen={state} onClose={toggleModal}>Hello</Modal>
    </>
  )
}

storiesOf("UI-Kit/Modal", module)
  .add("Simple text", () => (
    <Modal isOpen>Hello</Modal>
  ))
  .add("Playground", () => (
    <ModalPlayground />
  ))