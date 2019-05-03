import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Input, DatePicker, ToggleSwitch, Form, FormItem, Button } from '../../../ui-kit'


const StyledInvoiceInformation = styled.div`
  display: grid;
  width: auto;
  padding: 1rem;
`

const StyledButtonSubmit = styled(Button)`
  display: grid;
  margin: 0 auto;
  width: 100%;
  margin-top: 1rem;
`

const InvoiceInformation = React.memo(({ item = { amount: 0, subject: '' }, ...props }: any) => {
  const { date: itemDate } = item
  const [date, setDate] = useState(itemDate ? new Date(itemDate) : new Date())
  const [isRetrieve, setIsRetrive] = useState(false)
  const [amount, setAmount] = useState(item.amount)
  const [subject, setSubject] = useState(item.subject)

  useEffect(() => {
    setAmount(item.amount)
    setSubject(item.subject)
  }, [item.amount, item.subject])

  const datePickerOnchange = (value) => { setDate(value) }
  
  const toggleSwitchOnchange = (value) => {
    setIsRetrive(value)
    props.onRetriveFromBankAcc(value)
  }
  
  
  const subjectOnchange = (e) => { setSubject(e.target.value) }
  const amountOnChange = (e) => { setAmount(e.target.value) }
  const onSubmit = (e) => {
    const values = Object.keys(e).filter(e => e).reduce((prev, cur) => ({ ...prev, [cur]: e[cur] }), { amount: 0 }) || {}
    const amountFromValue = values && values.amount.toString()
    if(isRetrieve) {
      props.onNext({ ...values })
    } else {
      props.onSubmit({ ...values, amount: parseInt(amountFromValue, 10)})
    }
  }

  const isValidWithII = subject && subject.length  && amount
  const isValidWithPayments = subject && subject.length && isRetrieve

  return (
    <StyledInvoiceInformation>
      <Form onSubmit={onSubmit}>
        <FormItem>
          <DatePicker
            name="date"
            label="Date"
            onChange={datePickerOnchange}
            selectedDate={date}
            dateFormat="yyyy-MM-dd"
          />
        </FormItem>
        <FormItem>
          <Input label="Subject" name="subject" defaultValue={subject} onChange={subjectOnchange}/>
        </FormItem>
        <FormItem>
          <ToggleSwitch 
            name="retriveFromBankAcc"
            // isOpen={retriveFromBankAcc}
            label="Retrieve amount from your bank account"
            onChange={toggleSwitchOnchange}
          />
        </FormItem>
        <FormItem>
          { !isRetrieve && <Input name="amount" label="Amount" type="number" unit="EUR" isFormat value={amount} onChange={amountOnChange} /> }
        </FormItem>
        { 
          isRetrieve 
          ? <StyledButtonSubmit color="primary" disabled={!isValidWithPayments}>Next</StyledButtonSubmit>
          : <StyledButtonSubmit color="primary" type="submit" disabled={!isValidWithII}>Done</StyledButtonSubmit>
        }
      </Form>
    </StyledInvoiceInformation>
  )
})

export default InvoiceInformation
