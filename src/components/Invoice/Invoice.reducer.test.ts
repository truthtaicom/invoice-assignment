import { invoiceReducer } from './Invoice.reducer'
import * as types from './Invoice.actionTypes'

describe('reducer', () => {
  it('should create an reducer to get invoice with request status', () => {
    const expected = {
      request: true,
      data: [],
      error: null,
      paymentsFromBankAccount: [],
      selectedItem: {},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: {}
    }

    const result = invoiceReducer(undefined, { type: types.GET_INVOICES_REQUEST })
    expect(result).toEqual(expected)
  })
  it('should create an reducer to get invoice with success status', () => {
    const expected = {
      request: false,
      data: [{ id: 1 }],
      error: null,
      paymentsFromBankAccount: [],
      selectedItem: {},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: {}
    }

    const result = invoiceReducer(undefined, { type: types.GET_INVOICES_SUCCESS, payload: [{ id: 1 }] })
    expect(result).toEqual(expected)
  })
  it('should create an reducer to get invoice with failure status', () => {
    const expected = {
      request: false,
      data: [],
      error: Error,
      paymentsFromBankAccount: [],
      selectedItem: {},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: {}
    }
    const result = invoiceReducer(undefined, { type: types.GET_INVOICES_FAILURE, error: Error })
    expect(result).toEqual(expected)
  })
  it('should create an reducer to add invoice', () => {
    const expected = {
      request: false,
      data: [{ amount: 1, ibanNum: '1' }],
      error: null,
      paymentsFromBankAccount: [],
      selectedItem: {},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: {}
    }
    const result = invoiceReducer(undefined, { type: types.ADD_INVOICE, payload: { amount: 1, ibanNum: '1' } })
    expect(result).toEqual(expected)
  })
  it('should create an reducer to edit invoice', () => {
    const expected = {
      request: false,
      data: [],
      error: null,
      paymentsFromBankAccount: [],
      selectedItem: {},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: {}
    }
    const result = invoiceReducer(undefined, { type: types.EDIT_INVOICE, payload: { id: 1, amount: 1, ibanNum: '1'} })
    expect(result).toEqual(expected)
  })
  it('should create an reducer to delete invoice', () => {
    const expected = {
      request: false,
      data: [],
      error: null,
      paymentsFromBankAccount: [],
      selectedItem: {},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: {}
    }
    const result = invoiceReducer(undefined, { type: types.DELETE_INVOICE, payload: { id: 1, amount: 1, ibanNum: '1'} })
    expect(result).toEqual(expected)
  })
  it('should create an reducer to search IBAN with request status', () => {
    const expected = {
      request: true,
      data: [],
      error: null,
      paymentsFromBankAccount: [],
      selectedItem: {},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: {}
    }
    const result = invoiceReducer(undefined, { type: types.SEARCH_IBAN_REQUEST })
    expect(result).toEqual(expected)
  })
  it('should create an reducer to search IBAN with success status', () => {
    const expected = {
      request: false,
      data: [],
      error: null,
      paymentsFromBankAccount: [{ id: 1 }],
      selectedItem: {},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: {}
    }
    const result = invoiceReducer(undefined, { type: types.SEARCH_IBAN_SUCCESS, payload: [{ id: 1 }] })
    expect(result).toEqual(expected)
  })
  it('should create an reducer to search IBAN with failure status', () => {
    const expected = {
      request: false,
      data: [],
      error: Error,
      paymentsFromBankAccount: [],
      selectedItem: {},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: {}
    }
    const result = invoiceReducer(undefined, { type: types.SEARCH_IBAN_FAILURE, error: Error })
    expect(result).toEqual(expected)
  })
  it('should create an reducer to select item', () => {
    const expected = {
      request: false,
      data: [],
      error: null,
      paymentsFromBankAccount: [],
      selectedItem: { id: 1},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: {}
    }
    const result = invoiceReducer(undefined, { type: types.SELECT_ITEM, payload: { id: 1} })
    expect(result).toEqual(expected)
  })
  it('should create an reducer to set mode', () => {
    const expected = {
      request: false,
      data: [],
      error: null,
      paymentsFromBankAccount: [],
      selectedItem: { id: 1},
      modeInvoiceModal: 'DELETE',
      isDeleteMode: true,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: {}
    }
    const result = invoiceReducer(undefined, { type: types.SET_MODE, payload: { id: 1 }, mode: 'DELETE' })
    expect(result).toEqual(expected)
  })
  it('should create an reducer to set tab active', () => {
    const expected = {
      request: false,
      data: [],
      error: null,
      paymentsFromBankAccount: [],
      selectedItem: {},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: {}
    }
    const result = invoiceReducer(undefined, { type: types.SET_TAB_ACTIVE, payload: "ii" })
    expect(result).toEqual(expected)
  })
  it('should create an reducer to retrieve from bank account', () => {
    const expected = {
      request: false,
      data: [],
      error: null,
      paymentsFromBankAccount: [],
      selectedItem: {},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: true,
      selectedPaymentItem: {}
    }
    const result = invoiceReducer(undefined, { type: types.SET_RETRIEVE_FROM_BANK_ACC, payload: true })
    expect(result).toEqual(expected)
  })
  it('should create an reducer to select payment item', () => {
    const expected = {
      request: false,
      data: [],
      error: null,
      paymentsFromBankAccount: [],
      selectedItem: {},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: { id: 1 }
    }
    const result = invoiceReducer(undefined, { type: types.SELECT_PAYMENT_ITEM, payload: { id: 1 } })
    expect(result).toEqual(expected)
  })
  it('should create an reducer reset state', () => {
    const expected = {
      request: false,
      data: [],
      error: null,
      paymentsFromBankAccount: [],
      selectedItem: {},
      modeInvoiceModal: '',
      isDeleteMode: false,
      activedTab: 'ii',
      isRetrieveFromBankAcc: false,
      selectedPaymentItem: {}
    }
    const result = invoiceReducer(undefined, { type: types.RESET_STATE })
    expect(result).toEqual(expected)
  })
})
