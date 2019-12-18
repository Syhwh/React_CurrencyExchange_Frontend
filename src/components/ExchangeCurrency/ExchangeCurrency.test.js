import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, localMockStore } from '../../testUtils/testUtils';
import ExchangeCurrency from './ExchangeCurrency';

const setup = (initialState = {}, props = {}) => {
  const store = localMockStore(initialState);
  const componentProps = { ...props }
  const wrapper = shallow(<ExchangeCurrency store={store} props={componentProps} />);
  return wrapper
}


setup()
describe('<ExchangeCurrency/ > render component', () => {
  const mockFunction = jest.fn();
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      handleOnchange: mockFunction,
      handleOnClick: mockFunction,
    }
    const initialState = {
      user: {
        user: true,
        userError: ''
      },
      apiData: {
        currencyConversionRates: '',
        currencyExchange: '',
        currencyExchangeRate: '',
        userCurrencyExchangeHistory: '',
      }
    }
    wrapper = setup(initialState, defaultProps)
  })
  test(' render without error', () => {
    const component = findByTestAttr(wrapper, 'Exchange-Currency-Component');
    expect(component.length).toBe(1);
  });
  test('<InputCurrency/> render Input Currency without error', () => {
    const component = findByTestAttr(wrapper, 'Exchange-Currency-Component');
    const inputComponent = component.dive().find('[test-data="Input-Currency-Component"]')
    expect(inputComponent.length).toBe(1);
  });
  test('<ouputCurrency/> render Ouput currency without error', () => {
    const component = findByTestAttr(wrapper, 'Exchange-Currency-Component');
    const outputComponent = component.dive().find('[test-data="Output-Currency-Component"]')
    expect(outputComponent.length).toBe(1);
  });
  test('<Buttton> No render Button conversion without loggin ', () => {
    const component = findByTestAttr(wrapper, 'Exchange-Currency-Component');
    const buttonComponent = component.dive().find('[test-data="Button-Conversion-Currency-Component"]')
    expect(buttonComponent.length).toBe(0);
  });
})

