import React from 'react'
import { render } from 'react-testing-library'
import Loading from './Loading'

describe('<Loading /> spec', () => {
  it('renders the component', () => {
    const component = render(
      <Loading />
    )
    expect(component).toMatchSnapshot()
  })
});