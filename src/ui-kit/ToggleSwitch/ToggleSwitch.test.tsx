import React from 'react'
import { render } from 'react-testing-library'
import ToggleSwitch from './ToggleSwitch'

describe('<ToggleSwitch /> spec', () => {
  it('renders the component', () => {
    const component = render(<ToggleSwitch label="switch" value={true} onChange={jest.fn} />)
    expect(component).toMatchSnapshot()
  })
});