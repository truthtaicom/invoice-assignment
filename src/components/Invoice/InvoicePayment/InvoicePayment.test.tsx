import React from 'react'
import { render } from 'react-testing-library'
import InvoicePayment from './InvoicePayment'

describe('<InvoicePayment /> spec', () => {
  it('renders the component', () => {
    const component = render(<InvoicePayment data={[{ amount: 1 }]}/>)
    expect(component).toMatchSnapshot()
  })
});