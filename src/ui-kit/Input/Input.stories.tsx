import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from "./Input"
import { action } from '@storybook/addon-actions';

storiesOf("UI-Kit/Input", module)
  .add("basic", () => (
    <Input onChange={action('onChange')} />
  ))
  .add("with place Holder", () => (
    <Input onChange={action('onChange')}  placeholder="For example" />
  ))
  .add("with label", () => (
    <Input onChange={action('onChange')}  label="Your name" placeholder="John" />
  ))