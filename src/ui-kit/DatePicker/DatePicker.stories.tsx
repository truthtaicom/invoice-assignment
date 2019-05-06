import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import DatePicker from "./DatePicker"

storiesOf("UI-Kit/DatePicker", module)
  .add("basic", () => (
    <DatePicker
      selectedDate={new Date()}
      onChange={action('onChange')}
      dateFormat="yyyy-MM-dd"
    />
  ))
  .add("with label", () => (
    <DatePicker
      label="Date"
      selectedDate={new Date()}
      onChange={action('onChange')}
      dateFormat="yyyy-MM-dd"
    />
  ))