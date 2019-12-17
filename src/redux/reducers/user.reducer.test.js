import {
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGOUT,
} from '../actions/types.actions';

import userReducer, { initialState } from './api.reducer';

const userData = {
  userEmail: 'user@mockemail.com',
  userPassword: '1234'
}
const userLoginApiResponse =
{
  date: '2019-12-14T16:00:13.557Z',
  termsAndConditions: true,
  image: [],
  _id: '5df50744bbad4f25ac2dacae',
  userEmail: 'user@user.com',
  userPassword: '$2b$10$MbrLqWi',

}
describe('api Reducer', () => {
  test('should return defult state', () => {
    const userState = userReducer(undefined, {});
    expect(userState).toMatchObject(initialState);
  })
  test('should send the user register data - action type USER_REGISTER', () => {
    const newState = userReducer(initialState, {
      type: USER_REGISTER,
      payload: userData
    });
    expect(newState.user).toEqual(userData);

  });
  test('should send the user login data - action type USER_LOGIN', () => {
    const newState = userReducer(initialState, {
      type: USER_LOGIN,
      payload: userLoginApiResponse
    });
    expect(newState.user).toEqual(userLoginApiResponse);

  });
  test('should delete user Data - action type UPDATE_CURRENCY_RATES', () => {
    const newState = userReducer(initialState, {
      type: USER_LOGOUT
    });
    expect(newState.user).toBe('');

  });

})