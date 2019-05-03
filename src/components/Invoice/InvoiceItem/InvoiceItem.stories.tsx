import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import InvoiceItem from "./InvoiceItem"

storiesOf("Component/Invoice Item", module)
  .add("Default", () => (
    <InvoiceItem
      onEdit={action('onEdit')}
      onDelete={action('onDelete')}
      onClick={action('onClick')}
      date="2001/11/11"
      subject="ABC"
      amount={500}
      ibanNum="DE-12-1234-1234-12345-12"
    />
  ))
  .add("Actived", () => (
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
