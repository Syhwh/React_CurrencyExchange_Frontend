import React from 'react';
import propTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Input, Label } from 'semantic-ui-react';


function InputCurrency({ currency, handleOnchange }) {
  return (<>
    <Input
      fluid
      labelPosition='right' type='text' placeholder='Amount'  >
      <Label basic>USD</Label>
      <NumberFormat
        onChange={(e) => handleOnchange(e.target.value)}
        thousandSeparator
        decimalScale={4}
        prefix='$'
        className="some"
        inputMode="numeric"
        value={currency} />
    </Input>
  </>
  )
}

export default InputCurrency;

InputCurrency.propTypes = {
  currency: propTypes.number,
  handleOnchange: propTypes.func.isRequired
}

InputCurrency.defaultProps = {
  currency: undefined
}