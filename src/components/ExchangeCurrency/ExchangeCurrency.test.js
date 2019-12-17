import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, localMockStore } from '../../testUtils/testUtils';
import ExchangeCurrency from './ExchangeCurrency';

const setup = (initialState = {}, props = {}) => {
  const store = localMockStore(initialState);
  const wrapper = shallow(<ExchangeCurrency store={store} props={props} />);
  return wrapper
}

setup()
describe('Input render component', () => {
  const mockFunction = jest.fn();
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      handleOnchange: mockFunction,
      handleOnClick: mockFunction,
    }
    const initialState = {
      currentRate: 0.5,
      currencyExchanged: undefined
    }
    wrapper = setup(initialState, defaultProps)
  })
  test(' render without error', () => {
    const component = findByTestAttr(wrapper, 'Exchange-Currency-Component');
    expect(component.length).toBe(1);
  });
  test(' render Input Currency without error', () => {
    const component = findByTestAttr(wrapper, 'Exchange-Currency-Component');
    const inputComponent = component.dive().find('[test-data="Input-Currency-Component"]')
    expect(inputComponent.length).toBe(1);
  });
  test(' render Ouput currency without error', () => {
    const component = findByTestAttr(wrapper, 'Exchange-Currency-Component');
    const outputComponent = component.dive().find('[test-data="Output-Currency-Component"]')
    expect(outputComponent.length).toBe(1);
  });
  test(' render Button without error', () => {
    const component = findByTestAttr(wrapper, 'Exchange-Currency-Component');
    const buttonComponent = component.dive().find('[test-data="Button-Conversion-Currency-Component"]')
    expect(buttonComponent.length).toBe(1);
  });
  test(' render Input Currency without error', () => {
    const component = findByTestAttr(wrapper, 'Exchange-Currency-Component');
    const inputComponent = component.dive().find('[test-data="Input-Currency-Component"]').at(0).dive()

    inputComponent.simulate('change', {
      target: {
        value: 12345.123
      }
    });
    expect(inputComponent.length).toBe(1);
    // expect(inputComponent.props().value).toBe(12345);
  });
  // test(' render without error', () => {
  //   const wrapper = setup();
  //   const component = findByTestAttr(wrapper, 'Input-Currency-Component');
  //   expect(component.length).toBe(1);
  // });
  // test(' render the FormatNumenr component with default value', () => {
  //   const wrapper = setup();
  //   const component = findByTestAttr(wrapper, 'Input-Currency-Component');
  //   const formatComponent = component.dive().find('[test-data="Input-Number-Format"]')
  //   expect(formatComponent.length).toBe(1);
  //   expect(formatComponent.props().value).toBe(0);
  // });

})