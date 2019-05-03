import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import InvoiceItem from "./InvoiceItem"

storiesOf("Component", module)
  .add("Invoice List", () => (
    <InvoiceItem
      onEdit={action('onEdit')}
      onDelete={action('onDelete')}
      actived
      onClick={action('onClick')}
      date="2001/11/11"
      subject="ABC"
      amount={500}
      ibanNum="DE-12-1234-1234-12345-12"
    />
  ))
