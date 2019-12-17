/* eslint-disable import/prefer-default-export */
import currencyExchangeApi from '../../utils/api.configuration';
import { POST_CONVERT, GET_CURRENCY_RATES, UPDATE_CURRENCY_RATES, ERROR } from './types.actions';

export function getCurrencyExchangeRate() {
  return function dispatcher(dispatch) {
    const token = localStorage.getItem('token')
    return currencyExchangeApi
      .get('/api/rates', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(({ data }) => {
        dispatch({
          type: GET_CURRENCY_RATES,
          payload: data.rates
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR,
          payload: error.message
        })
      })
  }
}


export function makeCurrencyExchange(conversionData) {
  return function dispatcher(dispatch) {
    const token = localStorage.getItem('token');
    return currencyExchangeApi
      .post('/api/convert', null, {
        params: {
          from: 'USD',
          to: 'EUR',
          amount: conversionData
        },
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(({ data }) => {

        dispatch({
          type: POST_CONVERT,
          payload: data.savedUserExchangeData
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR,
          payload: error.message
        })
      });
  }
}

export function updateConversionRates(lastRate) {
   return function dispatcher(dispatch) {
    return dispatch({
      type: UPDATE_CURRENCY_RATES,
      payload: lastRate
    })
  }
}