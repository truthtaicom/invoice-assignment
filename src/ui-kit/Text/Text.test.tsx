import React from 'react'
import { render } from 'react-testing-library'
import Text from './Text'

describe('<Text /> spec', () => {
  it('renders the component', () => {
    const component = render(<Text>Hello</Text>)
    expect(component).toMatchSnapshot()
  })
});