import {
  POST_CONVERT,
  GET_CURRENCY_RATES,
  GET_USER_CONVERSIONS_INFO,
  UPDATE_CURRENCY_RATES,
  ERROR
} from '../actions/types.actions'

export const initialState = {
  currencyConversionRates: '',
  currencyExchange: '',
  currencyExchangeRate: '',
  userCurrencyExchangeHistory: '',
  error: ''
}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENCY_RATES:
      return {
        ...state,
        currencyConversionRates: action.payload,
        error: ''
      }
    case POST_CONVERT:
      return {
        ...state,
        currencyExchange: action.payload.result,
        currencyExchangeRate: action.payload.info.rate,
        error: ''
      }
    case GET_USER_CONVERSIONS_INFO:
      return {
        ...state,
        userCurrencyExchangeHistory: '',
        error: ''
      }
    case UPDATE_CURRENCY_RATES:
      return {
        ...state,
        currencyConversionRates: action.payload,
        error: ''
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}