import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Form from './Form'

describe('<Form /> spec', () => {
  it('renders the component', () => {
    const component = render(
      <Form onSubmit={jest.fn}>
        <p>OK</p>
      </Form>
    )
    expect(component).toMatchSnapshot()
  })
});