import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import InvoiceInformation from "./InvoiceInformation"

storiesOf("Component", module)
  .add("Invoice Information", () => (
    <InvoiceInformation date={new Date()} onRetriveFromBankAcc={action('onRetriveFromBankAcc')} />
  ))