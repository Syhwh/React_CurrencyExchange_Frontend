import React from 'react'
import ExchangeCurrencyContainer from '../ExchangeCurrency/ExchangeCurrencyContainer';
import CurrencyRatesCharts from '../CurrencyRatesCharts/CurrencyRatesChartsContainer';
import Footer from '../Footer/Footer';

export default function Home() {
  return (<>
    <ExchangeCurrencyContainer />
    <CurrencyRatesCharts />
    <Footer />
  </>)
}