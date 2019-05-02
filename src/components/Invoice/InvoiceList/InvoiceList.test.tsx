import React from 'react'
import { render } from 'react-testing-library'
import InvoiceList from './InvoiceList'

describe('<InvoiceList /> spec', () => {
  it('renders the component', () => {
    const component = render(
      <InvoiceList
        deleteInvoice={jest.fn}
        editInvoice={jest.fn}
        addInvoice={jest.fn}
        selectItem={jest.fn}
        data={[
          {
            date: '2018-01-01',
            subject: 'Rent january',
            amount: 500,
            unit: 'EUR',
            ibanNum: 'DE-12-1234-1234-12345-12',
          },
          {
            date: '2018-01-02',
            subject: 'Rent january',
            amount: 1500,
            unit: 'EUR',
            ibanNum: 'DE-12-1234-1234-12345-12',
          }
        ]}
        getInvoices={jest.fn}
        selectedItem={{}}
        setModeInvoice={jest.fn}
        setTabActive={jest.fn}
        resetState={jest.fn}
        setRetrieveFromBankAcc={jest.fn}
        selectPaymentItem={jest.fn}
      />
    )
    expect(component).toMatchSnapshot()
  })
});