/* eslint-disable import/prefer-default-export */
import currencyExchangeApi from '../../utils/api.configuration';
import { USER_REGISTER, USER_LOGIN, USER_LOGOUT, ERROR } from './types.action';

export function signupUser(userData) {
  return function dispatcher(dispatch) {
    return currencyExchangeApi
      .post('/register', userData)
      .then(({ data }) => {
        dispatch({
          type: USER_REGISTER,
          payload: userData
        });
        localStorage.setItem('token', data.token)
      })
      .catch(({ response }) => {
        dispatch({
          type: ERROR,
          payload: response.data.error
        })
      })
  }
}

export function loginUser(userData) {
  return function dispatcher(dispatch) {
    return currencyExchangeApi
      .post('/login', userData)
      .then(({ data }) => {
        dispatch({
          type: USER_LOGIN,
          payload: data
        });
        localStorage.setItem('token', data.token)
      })
      .catch(({ response }) => {
        dispatch({
          type: ERROR,
          payload: response.data.error
        })
      })
  }
}

export function logoutUser() {
  return function dispatcher(dispatch) {
    const token = localStorage.getItem('token')
    return currencyExchangeApi
      .post('/logout', null, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        dispatch({
          type: USER_LOGOUT
        });
        localStorage.removeItem('token')
      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,
          payload: data.error.message
        });
      })
  }
}
