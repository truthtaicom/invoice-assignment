import React from 'react'
import { render } from 'react-testing-library'
import Modal from './Modal'

describe('<Modal /> spec', () => {
  it('renders the component', () => {
    const component = render(
      <Modal>test this modal</Modal>
    )
    expect(component).toMatchSnapshot()
  })
});