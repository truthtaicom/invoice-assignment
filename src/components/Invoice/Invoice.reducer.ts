import {
  InvoicesActionTypes,
  SEARCH_IBAN_REQUEST, SEARCH_IBAN_SUCCESS, SEARCH_IBAN_FAILURE, SELECT_ITEM, SELECT_PAYMENT_ITEM,
  GET_INVOICES_REQUEST, GET_INVOICES_SUCCESS, GET_INVOICES_FAILURE, ADD_INVOICE, SET_MODE,
  EDIT_INVOICE, DELETE_INVOICE, RESET_STATE, SET_TAB_ACTIVE, SET_RETRIEVE_FROM_BANK_ACC,
}  from './Invoice.actionTypes'
import { IInvoiceItem } from './InvoiceItem/InvoiceItem'

export interface IInvoiceState {
  request: boolean,
  data: IInvoiceItem[],
  error: typeof Error | null,
  paymentsFromBankAccount: IInvoiceItem[],
  selectedItem?: IInvoiceItem,
  modeInvoiceModal: string,
  isDeleteMode: boolean,
  activedTab: string,
  isRetrieveFromBankAcc: boolean,
  selectedPaymentItem: IInvoiceItem
}

const initialState: IInvoiceState = {
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

export function invoiceReducer(
  state = initialState,
  action: InvoicesActionTypes
): IInvoiceState {
  switch (action.type) {
    case GET_INVOICES_REQUEST:
      return {
        ...state,
        request: true,
        data: [],
        error: null
      }
    case GET_INVOICES_SUCCESS:
      return {
        ...state,
        request: false,
        data: action.payload
      }
    case GET_INVOICES_FAILURE:
      return {
        ...state,
        request: false,
        error: action.error
      }

    case ADD_INVOICE:
      return {
        ...state,
        data: [{
          ...action.payload,
          amount: state.selectedPaymentItem.amount || action.payload.amount,
          ibanNum: state.selectedPaymentItem.ibanNum || action.payload.ibanNum
        }, 
          ...state.data
        ]
      }

    case EDIT_INVOICE:
      return {
        ...state,
        data: state.data.map((elm) => {
          if(elm.id === action.id) {
            return {
              ...elm,
              ...state.selectedItem,
              ...action.payload,
              ...state.selectedPaymentItem
            }
          }
          return elm
        })
      }

    case DELETE_INVOICE:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.id)
      }
      case SEARCH_IBAN_REQUEST:
      return {
        ...state,
        request: true,
        paymentsFromBankAccount: [],
        error: null
      }
    case SEARCH_IBAN_SUCCESS:
      return {
        ...state,
        request: false,
        paymentsFromBankAccount: action.payload
      }
    case SEARCH_IBAN_FAILURE:
      return {
        ...state,
        request: false,
        error: action.error
      }

    case SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.payload
      }  
    case SET_MODE:
      return {
        ...state,
        selectedItem: action.payload,
        modeInvoiceModal: action.mode,
        isDeleteMode: action.mode === 'DELETE'
      } 
    case SET_TAB_ACTIVE:
      return {
        ...state,
        activedTab: action.payload
      } 
    case SET_RETRIEVE_FROM_BANK_ACC:
      return {
        ...state,
        isRetrieveFromBankAcc: action.payload
      } 
    case SELECT_PAYMENT_ITEM:
      return {
        ...state,
        selectedPaymentItem: action.payload
      } 
    case RESET_STATE:
      return {
        ...state,
        selectedItem: {},
        modeInvoiceModal: '',
        isDeleteMode: false,
        isRetrieveFromBankAcc: false,
        selectedPaymentItem: {},
        paymentsFromBankAccount: [],
        activedTab: 'ii'
      }  
    default:
      return state
  }
}

