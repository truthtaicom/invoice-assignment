import { storiesOf } from '@storybook/react';
import React from 'react';
import Text from "./Text";

storiesOf("UI-Kit/Text", module)
  .add("basic", () => (
    <Text >Normal Text</Text>
  ))
  .add("with bold", () => (
    <Text isBold>Bold Text</Text>
  ))
  .add("with warning", () => (
    <Text color="warning">Warning Text</Text>
  ))
  .add("with danger", () => (
    <Text color="danger">Danger Text</Text>
  ))
  .add("with success", () => (
    <Text color="success">Success Text</Text>
  ))
  .add("with primary", () => (
    <Text color="primary">Primary Text</Text>
  ))

  