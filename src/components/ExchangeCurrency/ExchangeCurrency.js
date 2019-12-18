import React from 'react';
import propTypes from 'prop-types';
import { Button, Container, Grid, Segment } from 'semantic-ui-react';
import InputCurrency from '../InputCurrency/InputCurrency';
import OutputCurrency from '../OutputCurrency/OutputCurrency';
import ModalMessage from '../Modal/ModalMessage';

export default function ExchangeCurrency({
  handleOnchange,
  currency,
  currencyExchanged,
  handleOnClick,
  currentRate,
  user }) {
  return (<>
    <Container
      test-data='Exchange-Currency-Component'
      style={{ marginTop: '3rem' }}
    >
      <Grid columns='equal' >
        <Grid.Row>
          <Grid.Column>
            <Segment secondary>
              <InputCurrency
                test-data='Input-Currency-Component'
                handleOnchange={handleOnchange}
                currency={currency} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment secondary>
              <OutputCurrency
                test-data='Output-Currency-Component'
                currency={currencyExchanged} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={6}>
          <Grid.Column centered width={3} >
            {user ?
              <Button
                test-data='Button-Conversion-Currency-Component'
                centered
                onClick={handleOnClick}
                size='large'
                animated='fade'>
                <Button.Content visible>Make a conversion</Button.Content>
                <Button.Content hidden>Rate:{currentRate} </Button.Content>
              </Button> :
              <ModalMessage centered />}
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
  currentRate: propTypes.number,
  user: propTypes.string
}
ExchangeCurrency.defaultProps = {
  currency: undefined,
  currencyExchanged: 0,
  currentRate: undefined,
  user: undefined
}
