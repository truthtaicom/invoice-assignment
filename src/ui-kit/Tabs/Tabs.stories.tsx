import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import Tabs from './Tabs'
import TabItem from './TabItem'

export function TabsPlayground() {
  const [state, setState] = useState("tab2")
  const onChange = (value) => {
    setState(value)
  }
  return (
    <Tabs activeTab={state} onChange={onChange}>
      <TabItem title="Invoice Information" name="tab1">
      </TabItem>
      <TabItem title="Payment" name="tab2">
      </TabItem>
    </Tabs>
  )
}

storiesOf("UI-Kit/Tabs", module)
  .add("Tab Item", () => (
    <TabItem title="TabItem" isActived>Hello</TabItem>
  ))
  .add("Playground", () => (
    <TabsPlayground />
  ))