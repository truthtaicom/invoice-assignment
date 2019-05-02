import React, { useState } from 'react'
import styled from 'styled-components';
import InvoiceItem from '../InvoiceList/InvoiceItem'
import { IBANInput, SimpleList, Form, Button, Text } from '../../../ui-kit'


const StyledInvoiceInformation = styled.div`
  display: grid;
  padding: 1rem;
`

const StyledInvoicePaymentForm = styled(Form)`
  display: grid;
  grid-template-rows: 1fr 1fr 4fr 1fr;
  grid-row-gap: 1rem;
`

const StyledBtnConfirm = styled(Button)`
  margin: 1rem 0;
`

const InvoicePayment = (props) => {
  const [value, setValue] = useState()
  const onChangeIBAN = (e) => {
    const value = e.target.value
    if (!value.includes('_')) {
      props.onChangeIBANNum(value)
    }
  }

  const onSelectItem = (values) => {
    props.onSelect && props.onSelect(values)
  }

  return (
    <StyledInvoiceInformation>
      <StyledInvoicePaymentForm onSubmit={props.onSubmit}>
        <IBANInput
          name="ibanNum"
          label="Search IBAN"
          onChange={onChangeIBAN}
        />
        <Text>Found bank transfer</Text>
        <SimpleList data={props.data} renderItem={
          (itemProps) => <InvoiceItem actived={itemProps.id === (props.selected && props.selected.id)} {...itemProps} onClick={() => onSelectItem(itemProps)} />} 
        />
        
        <StyledBtnConfirm color="primary" disabled={!props.selected} type="submit">Done</StyledBtnConfirm>
      </StyledInvoicePaymentForm>
    </StyledInvoiceInformation>
  )
}

export default InvoicePayment
