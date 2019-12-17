import {
  POST_CONVERT,
  GET_CURRENCY_RATES,
  UPDATE_CURRENCY_RATES,
} from '../actions/types.actions';

import apiReducer, { initialState } from './api.reducer';

const ratesApiResponse = {
  success: true,
  rates: [
    {
      date: '2019-12-16T23:01:56.210Z',
      _id: '5df80cf801ad7d2330872189',
      countryCode: 'USA',
      baseCurrencyCode: 'USD',
      exchangeCurrencyCode: 'EUR',
      exchangeCurrencyRate: 32.91823339931179,

    },
    {
      date: '2019-12-16T23:01:56.210Z',
      _id: '5df80cf801ad7d2330872189',
      countryCode: 'USA',
      baseCurrencyCode: 'USD',
      exchangeCurrencyCode: 'EUR',
      exchangeCurrencyRate: 32.91823339931179,
    }]
}
const CurrencyConvertionApiResponse =
{
  query: {
    from: 'USD',
    to: 'EUR',
    amount: 10.1
  },
  info: {
    timestamp: '2019-12-17T13:34:57.551Z',
    rate: 3.691591837252953
  },
  result: 37.28507755625483,
}
describe('api Reducer', () => {
  test('should return defult state', () => {
    const newState = apiReducer(undefined, {});
    expect(newState).toMatchObject(initialState);
  })
  test('should return a new currency value and new exchange rate state action type POST_CONVERT', () => {
    const newState = apiReducer(initialState, {
      type: POST_CONVERT,
      payload: CurrencyConvertionApiResponse
    });
    expect(newState.currencyExchangeRate).toEqual(CurrencyConvertionApiResponse.info.rate);
    expect(newState.currencyExchange).toEqual(CurrencyConvertionApiResponse.result);

  });
  test('should return  new currency rates - action type GET_CURRENCY_RATES', () => {
    const newState = apiReducer(initialState, {
      type: GET_CURRENCY_RATES,
      payload: ratesApiResponse
    });
    expect(newState.currencyConversionRates).toEqual(ratesApiResponse);

  });
  test('should update the currency rates - action type UPDATE_CURRENCY_RATES', () => {
    const newState = apiReducer(initialState, {
      type: UPDATE_CURRENCY_RATES,
      payload: ratesApiResponse
    });
    expect(newState.currencyConversionRates).toEqual(ratesApiResponse);
  });

})