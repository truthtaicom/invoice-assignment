import * as actions from './Invoice.actions'
import * as types from './Invoice.actionTypes'

describe('actions', () => {
  it('should create an action to get invoice with request status', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.GET_INVOICES_REQUEST
    }
    expect(actions.getInvoicesRequest()).toEqual(expectedAction)
  })

  it('should create an action to get invoice with request success', () => {
    const text = [{ a: 'b' }]
    const expectedAction = {
      type: types.GET_INVOICES_SUCCESS,
      payload: text
    }
    expect(actions.getInvoicesSuccess(text)).toEqual(expectedAction)
  })

  it('should create an action to get invoice with request failure', () => {
    const text = 'error'
    const expectedAction = {
      type: types.GET_INVOICES_FAILURE,
      error: text
    }
    expect(actions.getInvoicesFailure(text)).toEqual(expectedAction)
  })

  it('should create an action to search IBAN with request status', () => {
    const expectedAction = {
      type: types.SEARCH_IBAN_REQUEST
    }
    expect(actions.searchIBANRequest()).toEqual(expectedAction)
  })

  it('should create an action to search IBAN with success status', () => {
    const text = '12345'
    const expectedAction = {
      type: types.SEARCH_IBAN_SUCCESS,
      payload: text
    }
    expect(actions.searchIBANSuccess(text)).toEqual(expectedAction)
  })

  it('should create an action to search IBAN with failure status', () => {
    const text = 'error'
    const expectedAction = {
      type: types.SEARCH_IBAN_FAILURE,
      error: text
    }
    expect(actions.searchIBANFailure(text)).toEqual(expectedAction)
  })

  it('should create an action to get invoice with request status', () => {
    const expectedAction = {
      type: types.GET_INVOICES_REQUEST
    }
    expect(actions.getInvoicesRequest()).toEqual(expectedAction)
  })

  it('should create an action to add invoice', () => {
    const text = 'invoice'
    const expectedAction = {
      type: types.ADD_INVOICE,
      payload: text
    }
    expect(actions.addInvoiceAction(text)).toEqual(expectedAction)
  })

  it('should create an action to edit invoice', () => {
    const text = 'edit'
    const expectedAction = {
      type: types.EDIT_INVOICE,
      id: 1,
      payload: text
    }
    expect(actions.editInvoiceAction(1, text)).toEqual(expectedAction)
  })

  it('should create an action to delete invoice', () => {
    const expectedAction = {
      type: types.DELETE_INVOICE,
      id: 1,
    }
    expect(actions.deleteInvoiceAction(1)).toEqual(expectedAction)
  })

  it('should create an action to retrieve amount', () => {
    const text = 'a'
    const expectedAction = {
      type: types.RETRIEVE_AMOUNT,
      payload: text,
    }
    expect(actions.retrieveAmountAction(text)).toEqual(expectedAction)
  })

  it('should create an action to select item', () => {
    const text= 'a'
    const expectedAction = {
      type: types.SELECT_ITEM,
      payload: text,
    }
    expect(actions.selectItemAction(text)).toEqual(expectedAction)
  })

  it('should create an action to set mode', () => {
    const mode= 'a'
    const text= { amount: 1 }
    const expectedAction = {
      type: types.SET_MODE,
      payload: text,
      mode
    }
    expect(actions.setModeAction(mode, text)).toEqual(expectedAction)
  })

  it('should create an action to reset state', () => {
    const expectedAction = {
      type: types.RESET_STATE
    }
    expect(actions.resetStateAction()).toEqual(expectedAction)
  })

  it('should create an action to set tab active', () => {
    const text = 'a'
    const expectedAction = {
      type: types.SET_TAB_ACTIVE,
      payload: text
    }
    expect(actions.setTabActiveAction(text)).toEqual(expectedAction)
  })

  it('should create an action to set retrive from bank acc active', () => {
    const value = true
    const expectedAction = {
      type: types.SET_RETRIEVE_FROM_BANK_ACC,
      payload: value
    }
    expect(actions.setRetrieveFromBankAccAction(value)).toEqual(expectedAction)
  })

  it('should create an action to select payment item', () => {
    const value = { amount: 1 }
    const expectedAction = {
      type: types.SELECT_PAYMENT_ITEM,
      payload: value
    }
    expect(actions.selectPaymentItemAction(value)).toEqual(expectedAction)
  })
})
