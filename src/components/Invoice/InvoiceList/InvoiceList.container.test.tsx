import React from 'react';
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup, wait } from 'react-testing-library'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Provider } from 'react-redux'
import ConnectedInvoiceList from './InvoiceList.container'
import { invoiceReducer } from '../Invoice.reducer'

afterEach(cleanup)

function renderWithRedux(
  ui,
  {initialState = { invoiceReducer: {  }}, store = createStore(invoiceReducer, initialState, applyMiddleware(thunk))} = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

test('can render with redux with defaults', () => {
  const {getByText} = renderWithRedux(<ConnectedInvoiceList />)
  expect(getByText('Add new invoice')).toBeTruthy()
})

test('can render with redux with data with Edit action', async () => {
  const {container, getByText} = renderWithRedux(<ConnectedInvoiceList />, {
    initialState: {
      invoiceReducer: {
        data: [
          {
            "id": 2,
            "date": "2018-01-02",
            "subject": "Rent May",
            "amount": 1500,
            "unit": "EUR",
            "ibanNum": "DE-32-1234-1234-12345-99"
          },
        ]
      }
    }
  })
  fireEvent.click(getByText('Edit'))
  // expect(getByText('Invoice Dialog')).toBeTruthy()
})


