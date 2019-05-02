import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import InvoicePayment from "./InvoicePayment"
import { simpleInvoiceListData } from '../InvoiceList/InvoiceList.utils'

storiesOf("Component", module)
  .add("Invoice Payment", () => (
    <InvoicePayment data={simpleInvoiceListData} />
  ))