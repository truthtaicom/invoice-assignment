import React from 'react'
import { render } from 'react-testing-library'
import { TabsPlayground } from './Tabs.stories'

describe('<Tabs /> spec', () => {
  it('renders the component', () => {
    const component = render(<TabsPlayground />)
    expect(component).toMatchSnapshot()
  })
});