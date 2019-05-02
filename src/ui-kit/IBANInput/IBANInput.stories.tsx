import { storiesOf } from '@storybook/react';
import React from 'react';
import IBANInput from "./IBANInput"

storiesOf("UI-Kit", module)
  .add("IBANInput", () => (
    <IBANInput />
  ))
