/* eslint-disable react/prop-types */
import React from 'react';
import NumberFormat from 'react-number-format';
import { Input, Label } from 'semantic-ui-react';

export default function OutputCurrency({ currency }) {

  return (<>
    <Input
      fluid
      labelPosition='right'
      readOnly >
      <Label basic>EUR</Label>
      <NumberFormat
      readOnly
        thousandSeparator
        decimalScale={4}
        prefix='$'
        className="some"
        inputMode="numeric"
        name='outputCurrency'
        value={currency} />
    </Input>
  </>)
}