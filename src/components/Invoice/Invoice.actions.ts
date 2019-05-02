import { ThunkAction } from 'redux-thunk'
import { AppState } from '../../store'
import { Action } from 'redux'
import { 
  IGetInvoiceRequestAction, IGetInvoiceSuccessAction, IGetInvoiceFailureAction,
  IAddInvoiceAction, IRetrieveAmountAction, IEditInvoiceAction, IDeleteInvoiceAction,
  ISearchIBANRequestAction, ISearchIBANSuccessAction, ISearchIBANFailureAction, ISelectItemAction,
  ISetModeAction, IResetStateAction, ISetTabActiveAction, ISSetRetrieveFromBankAccAction, ISelectPaymentItemAction,
  SELECT_ITEM, SET_TAB_ACTIVE, SET_RETRIEVE_FROM_BANK_ACC, SELECT_PAYMENT_ITEM,
  ADD_INVOICE, EDIT_INVOICE, DELETE_INVOICE, RETRIEVE_AMOUNT, SET_MODE, RESET_STATE,
  SEARCH_IBAN_REQUEST, SEARCH_IBAN_SUCCESS, SEARCH_IBAN_FAILURE,
  GET_INVOICES_REQUEST, GET_INVOICES_SUCCESS, GET_INVOICES_FAILURE
}  from './Invoice.actionTypes'
import { getInvoices as getInvoicesService } from '../../services/getInvoices'
import { searchIBAN as searchIBANService } from '../../services/searchIBAN';
import { IInvoiceItem } from './InvoiceList/InvoiceItem';



export function getInvoicesRequest(): IGetInvoiceRequestAction {
  return {
    type: GET_INVOICES_REQUEST
  }
}

export function getInvoicesSuccess(payload): IGetInvoiceSuccessAction {
  return {
    type: GET_INVOICES_SUCCESS,
    payload
  }
}

export function getInvoicesFailure(error): IGetInvoiceFailureAction {
  return {
    type: GET_INVOICES_FAILURE,
    error
  }
}

export function searchIBANRequest(): ISearchIBANRequestAction {
  return {
    type: SEARCH_IBAN_REQUEST
  }
}

export function searchIBANSuccess(payload): ISearchIBANSuccessAction {
  return {
    type: SEARCH_IBAN_SUCCESS,
    payload
  }
}

export function searchIBANFailure(error): ISearchIBANFailureAction {
  return {
    type: SEARCH_IBAN_FAILURE,
    error
  }
}


export function addInvoiceAction(payload): IAddInvoiceAction {
  return {
    type: ADD_INVOICE,
    payload
  }
}

export function editInvoiceAction(id, payload): IEditInvoiceAction {
  return {
    type: EDIT_INVOICE,
    id,
    payload
  }
}

export function deleteInvoiceAction(id): IDeleteInvoiceAction {
  return {
    type: DELETE_INVOICE,
    id
  }
}

export function retrieveAmountAction(payload): IRetrieveAmountAction {
  return {
    type: RETRIEVE_AMOUNT,
    payload
  }
}

export function selectItemAction(payload): ISelectItemAction {
  return {
    type: SELECT_ITEM,
    payload
  }
}

export function setModeAction(mode: string, payload?: IInvoiceItem): ISetModeAction {
  return {
    type: SET_MODE,
    mode,
    payload
  }
}

export function resetStateAction(): IResetStateAction {
  return {
    type: RESET_STATE
  }
}

export function setTabActiveAction(payload: string): ISetTabActiveAction {
  return {
    type: SET_TAB_ACTIVE,
    payload
  }
}

export function setRetrieveFromBankAccAction(value: boolean): ISSetRetrieveFromBankAccAction {
  return {
    type: SET_RETRIEVE_FROM_BANK_ACC,
    payload: value
  }
}

export function selectPaymentItemAction(payload: IInvoiceItem): ISelectPaymentItemAction {
  return {
    type: SELECT_PAYMENT_ITEM,
    payload
  }
}

export const getInvoices = (): ThunkAction<void, AppState, null, Action<string>> => 
  async dispatch => {
    dispatch(getInvoicesRequest())
    try {
      const invoices = await getInvoicesService()
      dispatch(getInvoicesSuccess(invoices))
    } catch(error) {
      getInvoicesFailure(error)
    }
}

export const selectItem = (item: IInvoiceItem): ThunkAction<void, AppState, null, Action<string>> => 
   dispatch => {
    dispatch(selectItemAction(item))
}


export const setModeInvoice = (mode: string, data?: IInvoiceItem): ThunkAction<void, AppState, null, Action<string>> => 
   dispatch => {
    dispatch(setModeAction(mode, data))
}

export const selectPaymentItem = (data: IInvoiceItem): ThunkAction<void, AppState, null, Action<string>> => 
   dispatch => {
    dispatch(selectPaymentItemAction(data))
}

export const resetState = (): ThunkAction<void, AppState, null, Action<string>> => 
   dispatch => {
    dispatch(resetStateAction())
}

export const setTabActive = (tabName: string): ThunkAction<void, AppState, null, Action<string>> => 
   dispatch => {
    dispatch(setTabActiveAction(tabName))
}

export const setRetrieveFromBankAcc = (value: boolean): ThunkAction<void, AppState, null, Action<string>> => 
   dispatch => {
    dispatch(setRetrieveFromBankAccAction(value))
}

export const searchIBAN = (ibanNum: string): ThunkAction<void, AppState, null, Action<string>> => 
  async dispatch => { 
    dispatch(searchIBANRequest())
    try {
      const data = await searchIBANService(ibanNum)
      dispatch(searchIBANSuccess(data))
    } catch(error) {
      dispatch(searchIBANFailure(error))
    }
  }

export const addInvoice = ({ date, subject, amount, unit = 'EUR', ibanNum }): ThunkAction<void, AppState, null, Action<string>> => 
  async dispatch => {
    dispatch(addInvoiceAction({ date, subject, amount, unit, ibanNum }))
    dispatch(resetState())
  }

export const deleteInvoice = ({ id }): ThunkAction<void, AppState, null, Action<string>> => 
  async dispatch => {
    dispatch(deleteInvoiceAction(id))
    dispatch(resetState())
  }

export const editInvoice = ({ id }, data): ThunkAction<void, AppState, null, Action<string>> => 
  async dispatch => {
    dispatch(editInvoiceAction(id, data))
    dispatch(resetState())
  }