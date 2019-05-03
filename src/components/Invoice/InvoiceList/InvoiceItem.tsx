import React from 'react'
import styled from 'styled-components'
import { Text, Button } from '../../../ui-kit'
import * as Colors from '../../../ui-kit/Variables/Colors'

export interface IInvoiceItem {
  id?: number,
  date?: string | null,
  subject?: string | null,
  amount?: number | string | null,
  unit?: string,
  ibanNum?: string,
  onDelete?: (e: any) => void,
  onEdit?: (e: any) => void
  actived?: boolean,
  onClick?: (e: any) => void
}

export interface IStyledInvoiceItem {
  hasControl: boolean,
  actived?: boolean,
  onClick?: (e: any) => void
}

export interface IStyledInvoiceItemControl {
  hasControl: boolean
}

const StyledDateText = styled(Text)`
  grid-area: date;
`

const StyledSubjectText = styled(Text)`
  grid-area: subject;
`

const StyledAmountText = styled(Text)`
  grid-area: amount;
`

const StyledIBANNumText = styled(Text)`
  grid-area: ibanNum;
`


const StyledInvoiceItem = styled.div<IStyledInvoiceItem>`
  display: grid;
  ${
    (props) => props.hasControl 
    ? `
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: "date amount control" "ibanNum ibanNum control" "subject subject control";
      grid-row-gap: 0.5rem;
    `
    : `
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: "date subject" "ibanNum ibanNum" "amount amount";
      grid-row-gap: 0.5rem;
    `
  }
  

  column-gap: 5px;
  align-items: center;
  border: 1px solid #ddd;
  transition: all 0.5s;
  cursor: pointer;
  padding: 1rem;

  background-color: ${props => props.actived ? Colors.blue1 : Colors.white}
  color: ${props => props.actived ? Colors.primary : Colors.black }

  &:hover {
    background-color: ${Colors.blue1};
  }


  @media only screen and (min-width: 680px) {
    ${(props) => props.hasControl 
      ? `
        grid-template-columns: 1fr 1fr 1fr 2fr 1fr;
        grid-template-areas: "date subject amount ibanNum control";
      `
      : `
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-areas: "date subject amount ibanNum";
      `
    }
  }
`

const StyledInvoiceItemControl = styled.div<IStyledInvoiceItemControl>`
  grid-area: control;
  display: ${(props) => props.hasControl ? 'grid' : 'none'};
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: none;
  row-gap: 5px;

  @media only screen and (min-width: 680px) {
    grid-area: control;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 5px;
  }
`


const InvoiceItem: React.FC<IInvoiceItem> = React.memo(({ onEdit, onDelete, actived, onClick, ...item}) => {
  const hasControl  = !!onEdit || !!onDelete
  return (
    <StyledInvoiceItem hasControl={hasControl} actived={actived} onClick={onClick}>
      <StyledDateText>{item.date || '-' }</StyledDateText>
      <StyledSubjectText>{item.subject || '-' }</StyledSubjectText>
      <StyledAmountText>{item.amount && item.amount.toLocaleString() || '-' } {item.unit}</StyledAmountText>
      <StyledIBANNumText>{item.ibanNum || '-' }</StyledIBANNumText>
      {
        (onEdit || onDelete) &&
        <StyledInvoiceItemControl hasControl={hasControl} >
          { onEdit && <Button color="primary" onClick={() => onEdit(item)}>Edit</Button> }
          { onDelete && <Button color="danger" onClick={() => onDelete(item)}>Delete</Button>}
        </StyledInvoiceItemControl>
      }
    </StyledInvoiceItem>
  )
})

export default InvoiceItem;
