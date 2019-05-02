import React from 'react'
import { render } from 'react-testing-library'
import SimpleList from './SimpleList'

describe('<SimpleList /> spec', () => {
  it('renders the component', () => {
    const component = render(
      <SimpleList 
        data={[{ a: "test1", b: "test2" }, { a: "test4", b: "test5" }]}
        renderItem={(itemProps, idx) => <p key={idx} >{itemProps.a} {itemProps.b}</p>}
      />
    )
    expect(component).toMatchSnapshot()
  })
});