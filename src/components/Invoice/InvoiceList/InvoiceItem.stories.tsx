import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import InvoiceList from "./InvoiceList"
import { simpleInvoiceListData } from './InvoiceList.utils'
import { omitDateFieldSelector } from './InvoiceList.selector';

storiesOf("Component/Invoice List", module)
  .add("List", () => (
    <InvoiceList
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
  // .add("List without Control", () => (
  //   <InvoiceList
  //     deleteInvoice={action("deleteInvoice")}
  //     editInvoice={action("editInvoice")}
  //     addInvoice={action("addInvoice")}
  //     selectItem={action("selectItem")}
  //     data={simpleInvoiceListData}
  //     getInvoices={action("getInvoices")}
  //     selectedItem={{}}
  //   />
  // ))
  // .add("List without Control & Date", () => (
  //   <InvoiceList
  //     deleteInvoice={action("deleteInvoice")}
  //     editInvoice={action("editInvoice")}
  //     addInvoice={action("addInvoice")}
  //     selectItem={action("selectItem")}
  //     data={omitDateFieldSelector({
  //       invoices: {
  //         data: simpleInvoiceListData
  //       }
  //     })}
  //     getInvoices={action("getInvoices")}
  //     selectedItem={{}}
  //   />
  // ))
  // .add("Playground", () => (
  //   <InvoiceList
  //     deleteInvoice={action("deleteInvoice")}
  //     editInvoice={action("editInvoice")}
  //     addInvoice={action("addInvoice")}
  //     selectItem={action("selectItem")}
  //     data={simpleInvoiceListData}
  //     getInvoices={action("getInvoices")}
  //     selectedItem={{}}
  //   />
  // ))