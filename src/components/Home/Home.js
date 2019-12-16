import React from 'react'
import ExchangeCurrencyContainer from '../ExchangeCurrency/ExchangeCurrencyContainer';
import CurrencyRatesCharts from '../CurrencyRatesCharts/CurrencyRatesChartsContainer';

export default function Home() {
  return (<>
    <ExchangeCurrencyContainer />
    <CurrencyRatesCharts />
  </>)
}