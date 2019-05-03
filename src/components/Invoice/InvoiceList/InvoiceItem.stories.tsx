import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import InvoiceList from "./InvoiceList"
import { simpleInvoiceListData } from './InvoiceList.utils'

storiesOf("Component", module)
  .add("Invoice List", () => (
    <InvoiceList
      paymentsFromBankAccount={simpleInvoiceListData}
      deleteInvoice={action("deleteInvoice")}
      editInvoice={action("editInvoice")}
      addInvoice={action("addInvoice")}
      selectItem={action("selectItem")}
      data={simpleInvoiceListData}
      getInvoices={action("getInvoices")}
      selectedItem={{}}
      setModeInvoice={action('setModeInvoice')}
      setTabActive={action('setTabActive')}
      resetState={action('resetState')}
      setRetrieveFromBankAcc={action('setRetrieveFromBankAcc')}
      selectPaymentItem={action('action')}
      selectedPaymentItem={{}}
    />
  ))
