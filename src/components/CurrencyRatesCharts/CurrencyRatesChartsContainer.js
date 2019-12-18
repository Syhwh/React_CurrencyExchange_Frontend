import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { getCurrencyExchangeRate } from '../../redux/actions/api.actions';

import CurrencyRatesCharts from './CurrencyRatesCharts';

function CurrencyRatesChartsContainer({ conversionRates, actionGetCurrencyExchangeRate }) {

  useEffect(() => {
    actionGetCurrencyExchangeRate()
  }, [])

  if (!conversionRates) return (<>
    <Dimmer active>
      <Loader size='huge'>Loading</Loader>
    </Dimmer>
  </>)
  return (
    <CurrencyRatesCharts
      conversionRates={conversionRates}
    />
  )
}

const mapDispatchToProps = {
  actionGetCurrencyExchangeRate: getCurrencyExchangeRate
}

const mapStateToProps = ({ apiData }) => {
  return {
    conversionRates: apiData.currencyConversionRates
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyRatesChartsContainer);

CurrencyRatesChartsContainer.propTypes = {
  conversionRates: propTypes.oneOfType([propTypes.object]).isRequired,
  actionGetCurrencyExchangeRate: propTypes.func.isRequired
}