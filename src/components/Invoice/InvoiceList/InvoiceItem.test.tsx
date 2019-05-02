import React from 'react'
import { render } from 'react-testing-library'
import InvoiceItem from './InvoiceItem'

describe('<InvoiceItem /> spec', () => {
  it('renders the component', () => {
    const component = render(<InvoiceItem />)
    expect(component).toMatchSnapshot()
  })
});