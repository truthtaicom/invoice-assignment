import { storiesOf } from '@storybook/react';
import React from 'react';
import InvoicePayment from "./InvoicePayment"
import { simpleInvoiceListData } from '../InvoiceList/InvoiceList.utils'

storiesOf("Component", module)
  .add("Invoice Payment", () => (
    <InvoicePayment data={simpleInvoiceListData} selected={{ id: 1 }} />
  ))