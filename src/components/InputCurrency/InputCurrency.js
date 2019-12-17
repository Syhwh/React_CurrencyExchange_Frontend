import React from 'react';
import propTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Input, Label } from 'semantic-ui-react';


function InputCurrency({ currency, handleOnchange }) {
  return (<>
    <Input
      test-data='Input-Currency-Component'
      fluid
      labelPosition='right'
      type='text'
      placeholder='Amount'  >
      <Label basic>USD</Label>
      <NumberFormat
        test-data='Input-Number-Format'
        onChange={(e) => handleOnchange(e.target.value)}
        thousandSeparator
        decimalScale={4}
        prefix='$'
        className="some"
        inputMode="numeric"
        name='inputCurrency'
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