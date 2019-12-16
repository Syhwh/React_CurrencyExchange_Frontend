import axios from 'axios';

const currencyExchangeApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/',
  timeout: 60000
})

export default currencyExchangeApi;