import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { AuthContext } from '../../helpers/authentication.context';
import { makeCurrencyExchange } from '../../redux/actions/api.actions';
import ExchangeCurrency from './ExchangeCurrency';

function ExchangeCurrencyContainer({ actionCurrencyExchange, currencyExchanged, currentRate }) {
  const [currency, setCurrency] = useState('');
  const { user } = useContext(AuthContext);

  const handleOnClick = () => {
    const value = parseFloat(currency.replace(/,/g, '').replace('$', ''));
    actionCurrencyExchange(value)
  }
  const handleOnchange = (val) => {
    setCurrency(val)
  }

  return (
    <ExchangeCurrency
      currencyAmount={currency}
      handleOnchange={handleOnchange}
      handleOnClick={handleOnClick}
      currencyExchanged={currencyExchanged}
      currentRate={currentRate}
      user={user}
    />
  )
}

const mapStateToProps = ({ apiData }) => {
  return {
    currentRate: apiData.currencyExchangeRate,
    currencyExchanged: apiData.currencyExchange
  }
}
const mapDispatchToProps = {
  actionCurrencyExchange: makeCurrencyExchange
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeCurrencyContainer);

ExchangeCurrencyContainer.propTypes = {
  actionCurrencyExchange: propTypes.func,
  currencyExchanged: propTypes.string,
  currentRate: propTypes.string
}
ExchangeCurrencyContainer.defaultProps = {
  actionCurrencyExchange: undefined,
  currencyExchanged: 0,
  currentRate: undefined
}