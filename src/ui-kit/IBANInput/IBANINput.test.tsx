import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import IBANInput from './IBANInput'

describe('<IBANInput /> spec', () => {
  it('renders the component', () => {
    const component = render(<IBANInput value="DE-12-1234-1234-12345-12" />)
    expect(component).toMatchSnapshot()
  })
});