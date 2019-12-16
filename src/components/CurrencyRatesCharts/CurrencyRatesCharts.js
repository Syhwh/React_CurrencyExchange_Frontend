import React from 'react';
import propTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function CurrencyRatesChart({ conversionRates }) {
  const data = conversionRates.map((element) => {
    return ({
      name: new Date(element.date).toDateString(),
      rate: element.exchangeCurrencyRate,
    });
  });
  return (
    < LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }
      }>
      <Line type="monotone" dataKey="rate" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart >
  )

};

CurrencyRatesChart.propTypes = {
  conversionRates: propTypes.oneOfType([propTypes.object]).isRequired,
}