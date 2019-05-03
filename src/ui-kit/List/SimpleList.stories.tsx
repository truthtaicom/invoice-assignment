import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import SimpleList from "./SimpleList"
import InvoiceItem from '../../components/Invoice/InvoiceItem/InvoiceItem'
import { simpleInvoiceListData } from './SimpleList.utils'

storiesOf("UI-Kit", module)
  .add("SimpleList", () => (
    <SimpleList
      data={simpleInvoiceListData}
      renderItem={(props) => <InvoiceItem {...props} onDelete={action('onDelete')} onEdit={action('onEdit')} />}
    />
  ))