import React from 'react';
import InputMask from 'react-input-mask';
import { Input } from '../'

const IBANInput = (props) => {
 return (
  <InputMask {...props} mask="DE-99-9999-9999-99999-99">
    {(inputProps) => (
      <Input {...inputProps} placeholder="DE-12-1234-1234-12345-12" />
    )}
  </InputMask>
 );
}

export default IBANInput
