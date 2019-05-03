import { IInvoiceItem } from './InvoiceItem/InvoiceItem'

export const GET_INVOICES_REQUEST = 'GET_INVOICES_REQUEST'
export const GET_INVOICES_SUCCESS = 'GET_INVOICES_SUCCESS'
export const GET_INVOICES_FAILURE = 'GET_INVOICES_FAILURE'

export const SEARCH_IBAN_REQUEST = 'SEARCH_IBAN_REQUEST'
export const SEARCH_IBAN_SUCCESS = 'SEARCH_IBAN_SUCCESS'
export const SEARCH_IBAN_FAILURE = 'SEARCH_IBAN_FAILURE'

export const ADD_INVOICE = 'ADD_INVOICE'
export const DELETE_INVOICE = 'DELETE_INVOICE'
export const EDIT_INVOICE = 'EDIT_INVOICE'
export const RETRIEVE_AMOUNT = 'RETRIEVE_AMOUNT'
export const SELECT_ITEM = 'SELECT_ITEM'
export const SET_MODE = 'SET_MODE'
export const RESET_STATE = 'RESET_STATE'
export const SET_TAB_ACTIVE = 'SET_TAB_ACTIVE'
export const SET_RETRIEVE_FROM_BANK_ACC = 'SET_RETRIEVE_FROM_BANK_ACC'
export const SELECT_PAYMENT_ITEM = 'SELECT_PAYMENT_ITEM'

export interface IGetInvoiceRequestAction {
  type: typeof GET_INVOICES_REQUEST
}

export interface IGetInvoiceSuccessAction {
  type: typeof GET_INVOICES_SUCCESS,
  payload: IInvoiceItem[]
}

export interface IGetInvoiceFailureAction {
  type: typeof GET_INVOICES_FAILURE,
  error: typeof Error
}

export interface ISearchIBANRequestAction {
  type: typeof SEARCH_IBAN_REQUEST
}

export interface ISearchIBANSuccessAction {
  type: typeof SEARCH_IBAN_SUCCESS,
  payload: IInvoiceItem[]
}

export interface ISearchIBANFailureAction {
  type: typeof SEARCH_IBAN_FAILURE,
  error: typeof Error
}

export interface IAddInvoiceAction {
  type: typeof ADD_INVOICE,
  payload: IInvoiceItem
}

export interface IEditInvoiceAction {
  type: typeof EDIT_INVOICE,
  id?: number,
  payload: IInvoiceItem
}

export interface IDeleteInvoiceAction {
  type: typeof DELETE_INVOICE,
  id?: number
}

export interface IRetrieveAmountAction {
  type: typeof RETRIEVE_AMOUNT,
  payload: number
}

export interface ISelectItemAction {
  type: typeof SELECT_ITEM,
  payload: IInvoiceItem
}

export interface ISetModeAction {
  type: typeof SET_MODE,
  mode: string,
  payload?: IInvoiceItem
}

export interface IResetStateAction {
  type: typeof RESET_STATE,
}

export interface ISetTabActiveAction {
  type: typeof SET_TAB_ACTIVE,
  payload: string,
}

export interface ISSetRetrieveFromBankAccAction {
  type: typeof SET_RETRIEVE_FROM_BANK_ACC,
  payload: boolean,
}

export interface ISelectPaymentItemAction {
  type: typeof SELECT_PAYMENT_ITEM,
  payload: IInvoiceItem,
}

export type InvoicesActionTypes = IGetInvoiceRequestAction 
| IGetInvoiceSuccessAction 
| IGetInvoiceFailureAction 
| IAddInvoiceAction 
| IRetrieveAmountAction 
| IDeleteInvoiceAction 
| IEditInvoiceAction
| ISearchIBANRequestAction
| ISearchIBANSuccessAction
| ISearchIBANFailureAction
| ISelectItemAction
| ISetModeAction
| IResetStateAction
| ISetTabActiveAction
| ISSetRetrieveFromBankAccAction
| ISelectPaymentItemAction

