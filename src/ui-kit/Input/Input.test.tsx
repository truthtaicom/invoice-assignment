import React from 'react'
import { render } from 'react-testing-library'
import Input from './Input'

describe('<Input /> spec', () => {
  it('renders the component', () => {
    const component = render(<Input defaultValue="hello" />)
    expect(component).toMatchSnapshot()
  })
});