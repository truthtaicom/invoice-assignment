import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import DatePicker from './DatePicker'

describe('<DatePicker /> spec', () => {
  it('renders the component', () => {
    const component = render(<DatePicker selectedDate={new Date()} />)
    expect(component).toMatchSnapshot()
  })
});