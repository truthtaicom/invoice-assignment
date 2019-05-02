import { storiesOf } from '@storybook/react';
import React from 'react';
import ToggleSwitch from "./ToggleSwitch";
import { action } from '@storybook/addon-actions';

storiesOf("UI-Kit/Toggle Switch", module)
  .add("Actived", () => (
    <ToggleSwitch onChange={action('onChange')} isOpen={true} />
  ))
  .add("Playground", () => (
    <ToggleSwitch onChange={action('onChange')} isOpen={false} />
  ))
  