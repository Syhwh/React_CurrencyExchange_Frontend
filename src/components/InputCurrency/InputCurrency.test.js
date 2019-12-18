import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../testUtils/testUtils';
import InputCurrency from './InputCurrency';


/**
 * Function to create ShallwWrapper for the InputCurrency component
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => {
  const mockFunction = jest.fn();
  return shallow(
    <InputCurrency
      handleOnchange={mockFunction}
      currency={0} />)
}

describe('Input render component', () => {
  test(' render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'Input-Currency-Component');
    expect(component.length).toBe(1);
  });
  test(' render the FormatNumber component with default value', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'Input-Currency-Component');
    const formatComponent = component.dive()
      .find('[test-data="Input-Number-Format"]')
    expect(formatComponent.length).toBe(1);
    expect(formatComponent.props().value).toBe(0);
  });

})