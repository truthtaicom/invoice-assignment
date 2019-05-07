import { getInvoices as getInvoicesService } from '../../services/getInvoices'
import { searchIBAN as searchIBANService } from '../../services/searchIBAN';
import { takeLatest, put, call, all } from 'redux-saga/effects';
import * as Actions from './Invoice.actions'
import {
  ADD_INVOICE, EDIT_INVOICE, DELETE_INVOICE, SEARCH_IBAN_REQUEST, GET_INVOICES_REQUEST
}  from './Invoice.actionTypes'

export const getInvoices = function* () {
  try {
    const invoices = yield call(getInvoicesService);
    yield put(Actions.getInvoicesSuccess(invoices));
  } catch (e) {
    yield put(Actions.getInvoicesFailure(e));
  }
}

export const resetState = function* () {
  yield put(Actions.resetStateAction());
}

export const searchIBAN = function* (action) {
  try {
    const data = yield call(searchIBANService, action.payload);
    yield put(Actions.searchIBANSuccess(data));
  } catch (e) {
    yield put(Actions.searchIBANFailure(e));
  }
}


export const invoiceSaga = function* () {
  yield all([
    takeLatest(ADD_INVOICE, resetState),
    takeLatest(DELETE_INVOICE, resetState),
    takeLatest(EDIT_INVOICE, resetState),
    takeLatest(GET_INVOICES_REQUEST, getInvoices),
    takeLatest(SEARCH_IBAN_REQUEST, searchIBAN),
  ]);
}
