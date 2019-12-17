/* eslint-disable import/prefer-default-export */
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';

/**
 * Return node(s) with the given test-data attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {String} value - Value of test-data attribute for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[test-data="${value}"]`)
}

/**
 * Create a testig store with imported reducers, middleware, and initial state
 * globals: rootReducer
 * @param {object} initialState 
 * @function storeFactory
 * @returns {Store} -redux store 
 */

export const localMockStore = (initialState) => {
  return createStore(rootReducer, initialState)
}

