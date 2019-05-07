import * as actions from './Invoice.actions'
import * as types from './Invoice.actionTypes'
import { getAction } from '../../utils/test/getAction'
import { mockStore } from '../../utils/test/mockStore'
import { getInvoices as getInvoicesService } from '../../services/getInvoices'
import { searchIBAN as searchIBANService } from '../../services/searchIBAN';
import { IInvoiceItem } from './InvoiceItem/InvoiceItem';

jest.mock('../../services/getInvoices', () => ({
  getInvoices: jest.fn(),
}))


jest.mock('../../services/searchIBAN', () => ({
  searchIBAN: jest.fn(),
}))

beforeEach(() => {
  jest.resetAllMocks();
});

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

  it('handles getInvoices status and fetches all invoices', async () => {
    const result = [{ id: 1 }];
    (<jest.Mock>getInvoicesService).mockImplementationOnce(() => ([...result]))
    const store = mockStore({});
    store.dispatch(actions.getInvoices());
    expect(await getAction(store, types.GET_INVOICES_REQUEST)).toEqual({type: types.GET_INVOICES_REQUEST});
    expect(await getAction(store, types.GET_INVOICES_SUCCESS)).toEqual({type: types.GET_INVOICES_SUCCESS, payload: [...result]});
  })

  it('handles selectItem action', async () => {
    const result = [{ id: 1 }];
    const store = mockStore({});
    store.dispatch(actions.selectItem({...result[1]}));
    expect(await getAction(store, types.SELECT_ITEM)).toEqual({type: types.SELECT_ITEM, payload: {...result[1]}});
  })

  it('handles setModeInvoice action', async () => {
    const result = [{ id: 1 }];
    const store = mockStore({});
    store.dispatch(actions.setModeInvoice('a', {...result[1] }));
    expect(await getAction(store, types.SET_MODE)).toEqual({type: types.SET_MODE, mode: 'a', payload: {...result[1]}});
  })

  it('handles selectPaymentItem action', async () => {
    const result = [{ id: 1 }];
    const store = mockStore({});
    store.dispatch(actions.selectPaymentItemAction({...result[1]}));
    expect(await getAction(store, types.SELECT_PAYMENT_ITEM)).toEqual({type: types.SELECT_PAYMENT_ITEM, payload: {...result[1]}});
  })

  it('handles resetState action', async () => {
    const store = mockStore({});
    store.dispatch(actions.resetState());
    expect(await getAction(store, types.RESET_STATE)).toEqual({type: types.RESET_STATE });
  })

  it('handles setTabActive action', async () => {
    const store = mockStore({});
    store.dispatch(actions.setTabActive('a'));
    expect(await getAction(store, types.SET_TAB_ACTIVE)).toEqual({type: types.SET_TAB_ACTIVE, payload: 'a'});
  })

  it('handles setRetrieveFromBankAcc action', async () => {
    const store = mockStore({});
    store.dispatch(actions.setRetrieveFromBankAcc(true));
    expect(await getAction(store, types.SET_RETRIEVE_FROM_BANK_ACC)).toEqual({type: types.SET_RETRIEVE_FROM_BANK_ACC, payload: true});
  })

  it('handles searchIBAN status and fetches all invoices', async () => {
    const result = [{ id: 1 }];
    (<jest.Mock>searchIBANService).mockImplementationOnce(() => ([...result]))
    const store = mockStore({});
    store.dispatch(actions.searchIBAN('abc'));
    expect(await getAction(store, types.SEARCH_IBAN_REQUEST)).toEqual({type: types.SEARCH_IBAN_REQUEST});
    expect(await getAction(store, types.SEARCH_IBAN_SUCCESS)).toEqual({type: types.SEARCH_IBAN_SUCCESS, payload: [...result]});
  })

  it('handles addInvoice action', async () => {
    const store = mockStore({});
    store.dispatch(actions.addInvoice({ date: '2011/11/11', subject: 'a', amount: 5000, unit: 'EUR', ibanNum: 'DE-000' }));
    expect(await getAction(store, types.ADD_INVOICE)).toEqual({type: types.ADD_INVOICE, payload: { date: '2011/11/11', subject: 'a', amount: 5000, unit: 'EUR', ibanNum: 'DE-000' }});
    expect(await getAction(store, types.RESET_STATE)).toEqual({type: types.RESET_STATE });
  })

  it('handles deleteInvoice action', async () => {
    const store = mockStore({});
    store.dispatch(actions.deleteInvoice({ id: 1 }));
    expect(await getAction(store, types.DELETE_INVOICE)).toEqual({type: types.DELETE_INVOICE, id: 1});
    expect(await getAction(store, types.RESET_STATE)).toEqual({type: types.RESET_STATE });
  })

  it('handles editInvoice action', async () => {
    const store = mockStore({});
    store.dispatch(actions.editInvoice({ id: 1 }, { id: 1, amount: 5 }));
    expect(await getAction(store, types.EDIT_INVOICE)).toEqual({type: types.EDIT_INVOICE, id: 1, payload: { id: 1, amount: 5 }});
    expect(await getAction(store, types.RESET_STATE)).toEqual({type: types.RESET_STATE });
  })
})
