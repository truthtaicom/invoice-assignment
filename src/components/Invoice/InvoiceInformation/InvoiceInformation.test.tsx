import React from 'react'
import { render } from 'react-testing-library'
import InvoiceInformation from './InvoiceInformation'

describe('<InvoiceInformation /> spec', () => {
  it('renders the component', () => {
    const component = render(<InvoiceInformation onRetriveFromBankAcc={jest.fn} />)
    expect(component).toMatchSnapshot()
  })
});