import React from 'react';
import propTypes from 'prop-types';
import {
  Button,
  Container,
  Grid,
  Segment,

} from 'semantic-ui-react';
import InputCurrency from '../InputCurrency/InputCurrency';
import OutputCurrency from '../OutputCurrency/OutputCurrency';

export default function ExchangeCurrency({
  handleOnchange,
  currency,
  currencyExchanged,
  handleOnClick,
  currentRate }) {
  return (<>
    <Container
      style={{
        marginTop: '3rem'
      }}
    >
      <Grid columns='equal' >
        <Grid.Row>
          <Grid.Column>
            <Segment secondary>
              <InputCurrency
                handleOnchange={handleOnchange}
                currency={currency} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment secondary>
              <OutputCurrency
                currency={currencyExchanged} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button
              onClick={handleOnClick}
              size='large'
              animated='fade'>
              <Button.Content visible>Make a conversion</Button.Content>
              <Button.Content hidden>Rate:{currentRate} </Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </>)
}
ExchangeCurrency.propTypes = {
  handleOnchange: propTypes.func.isRequired,
  handleOnClick: propTypes.func.isRequired,
  currency: propTypes.string,
  currencyExchanged: propTypes.number,
  currentRate: propTypes.number
}
ExchangeCurrency.defaultProps = {
  currency: undefined,
  currencyExchanged: undefined,
  currentRate: undefined,
}
