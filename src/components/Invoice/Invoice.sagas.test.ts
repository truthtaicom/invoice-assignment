jest.mock('../../services/getInvoices', () => ({
  getInvoices: jest.fn(),
}))


jest.mock('../../services/searchIBAN', () => ({
  searchIBAN: jest.fn(),
}))

import { takeLatest, call, put, all } from 'redux-saga/effects'
import { getInvoices as getInvoicesService } from '../../services/getInvoices'
import { getInvoices, resetState, searchIBAN, invoiceSaga } from './Invoice.sagas'
import * as Actions from './Invoice.actions'
import { searchIBAN as searchIBANService } from '../../services/searchIBAN';
import { IInvoiceItem } from './InvoiceItem/InvoiceItem';
import {
  ADD_INVOICE, EDIT_INVOICE, DELETE_INVOICE, SEARCH_IBAN_REQUEST, GET_INVOICES_REQUEST
}  from './Invoice.actionTypes'

beforeEach(() => {
  jest.resetAllMocks();
});

describe('sagas', () => {
  it('should watch invoiceSaga', () => {
    const gen = invoiceSaga()
    expect(gen.next().value).toEqual(all([
      takeLatest(ADD_INVOICE, resetState),
      takeLatest(DELETE_INVOICE, resetState),
      takeLatest(EDIT_INVOICE, resetState),
      takeLatest(GET_INVOICES_REQUEST, getInvoices),
      takeLatest(SEARCH_IBAN_REQUEST, searchIBAN),
    ]))
  })

  it('should dispatch action "GET_INVOICES_SUCCESS" with result ', () => {
    const result: IInvoiceItem[] = [{ id: 1 }];
    (<jest.Mock>getInvoicesService).mockImplementationOnce(() => ([...result]))
    
    const gen = getInvoices()
    expect(gen.next().value).toEqual(call(getInvoicesService))
    expect(gen.next([...result]).value).toEqual(put(Actions.getInvoicesSuccess([...result])))
  })

  it('should dispatch action "GET_INVOICES_FAILURE" with error', () => {
    const gen = getInvoices()
    expect(gen.next().value).toEqual(call(getInvoicesService));
    expect(gen.throw && gen.throw(new Error()).value).toEqual(put(Actions.getInvoicesFailure(new Error())))
  });

  it('should dispatch action "resetState"', () => {
    const gen = resetState()
    expect(gen.next().value).toEqual(put(Actions.resetStateAction()))
  })

  it('should dispatch action "SEARCH_IBAN_SUCCESS" with result ', () => {
    const result: IInvoiceItem[] = [{ id: 1 }];
    (<jest.Mock>searchIBANService).mockImplementationOnce(() => ([...result]))
    
    const gen = searchIBAN({ type: 'SEARCH_IBAN_REQUEST', payload: 'DE-0000000000000' })
    expect(gen.next().value).toEqual(call(searchIBANService, 'DE-0000000000000' ))
    expect(gen.next([...result]).value).toEqual(put(Actions.searchIBANSuccess([...result])))
  })

  it('should dispatch action "SEARCH_IBAN_FAILURE" with error', () => {
    const gen = searchIBAN({ type: 'SEARCH_IBAN_REQUEST', payload: 'DE-0000000000000' })
    expect(gen.next().value).toEqual(call(searchIBANService, 'DE-0000000000000' ));
    expect(gen.throw && gen.throw(new Error()).value).toEqual(put(Actions.searchIBANFailure(new Error())))
  });
})
