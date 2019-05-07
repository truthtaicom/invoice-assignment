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
import { IInvoiceItem } from './InvoiceItem/InvoiceItem';



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

export function searchIBANRequest(ibanNum: string): ISearchIBANRequestAction {
  return {
    type: SEARCH_IBAN_REQUEST,
    payload: ibanNum
  }
}

export function searchIBANSuccess(payload: IInvoiceItem[]): ISearchIBANSuccessAction {
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

export function editInvoiceAction(currentItem: IInvoiceItem, changedItem: IInvoiceItem): IEditInvoiceAction {
  return {
    type: EDIT_INVOICE,
    payload: {
      currentItem,
      changedItem
    }
  }
}

export function deleteInvoiceAction(data: IInvoiceItem): IDeleteInvoiceAction {
  return {
    type: DELETE_INVOICE,
    payload: data.id
  }
}

export function retrieveAmountAction(payload): IRetrieveAmountAction {
  return {
    type: RETRIEVE_AMOUNT,
    payload
  }
}

export function selectItemAction(payload: IInvoiceItem): ISelectItemAction {
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
