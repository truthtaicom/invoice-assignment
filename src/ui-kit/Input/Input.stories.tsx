import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from "./Input"

storiesOf("UI-Kit/Input", module)
  .add("basic", () => (
    <Input />
  ))
  .add("with place Holder", () => (
    <Input placeholder="For example" />
  ))
  .add("with label", () => (
    <Input label="Your name" placeholder="John" />
  ))