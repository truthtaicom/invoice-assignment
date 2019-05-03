import React from 'react'
import styled from 'styled-components';
import InvoiceItem, { IInvoiceItem } from '../InvoiceItem/InvoiceItem'
import { IBANInput, SimpleList, Form, FormItem, Button, Text } from '../../../ui-kit'

export interface IInvoicePayment{
  onSelect?: (e: any) => void,
  onSubmit?: (e: any) => void,
  onChangeIBANNum?: (e: any) => void,
  data: IInvoiceItem[],
  selected?: IInvoiceItem
}


const StyledInvoiceInformation = styled.div`
  display: grid;
  padding: 1rem;
`

const StyledInvoicePaymentForm = styled(Form)`
  display: grid;
  grid-row-gap: 1rem;
`

const StyledFoundInvoiceText = styled(Text)``

const StyledBtnConfirm = styled(Button)`
  margin: 0;
`

const InvoicePayment: React.FC<IInvoicePayment> = React.memo((props) => {
  const onChangeIBAN = (e) => {
    const value = e.target.value
    if (!value.includes('_')) {
      props.onChangeIBANNum && props.onChangeIBANNum(value)
    }
  }

  const onSelectItem = (values) => {
    props.onSelect && props.onSelect(values)
  }

  return (
    <StyledInvoiceInformation>
      <StyledInvoicePaymentForm onSubmit={props.onSubmit}>
        <FormItem>
          <IBANInput
            name="ibanNum"
            label="Search IBAN"
            onChange={onChangeIBAN}
          />
        </FormItem>
        {
          props.data && props.data.length > 0
          && (
            <>
              <StyledFoundInvoiceText>Found {props.data.length} payment(s) from bank transfer</StyledFoundInvoiceText>
              <SimpleList data={props.data} renderItem={
                (itemProps) => <InvoiceItem key={itemProps.id} actived={itemProps.id === (props.selected && props.selected.id)} {...itemProps} onClick={() => onSelectItem(itemProps)} />} 
              />
            </>
          )
        }

        {
          props.data && props.data.length <= 0 && (<StyledFoundInvoiceText>Not found any payments</StyledFoundInvoiceText>)
        }
        
        
        <StyledBtnConfirm color="primary" disabled={!props.selected} type="submit">Done</StyledBtnConfirm>
      </StyledInvoicePaymentForm>
    </StyledInvoiceInformation>
  )
})

export default InvoicePayment
