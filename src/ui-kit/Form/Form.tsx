import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  grid-row-gap: 0.1rem;
  width: calc(100vw - 2rem);
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(1rem, 3fr));

  @media only screen and (min-width: 680px) {
    width: 100%;
  }
`

function Form({ children, onSubmit, ...props }) {
  const onFromSubmit = (e) => {
    e.preventDefault()
    const values: any = Array.from(e.target.elements)
      .reduce((prev, cur: any = {}) => ({
        ...prev,
        [cur.name]: cur.type === 'checkbox' ? cur.checked : cur.value
      }), {})
    onSubmit(values)
  }

  return (
    <StyledForm onSubmit={onFromSubmit} {...props}>
      {
        children
      }
    </StyledForm>
  )
}

export default Form