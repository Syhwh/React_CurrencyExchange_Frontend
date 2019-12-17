import { USER_REGISTER, USER_LOGIN, USER_LOGOUT, ERROR } from '../actions/types.actions';

export const initialState = {
  user: '',
  userError: ''
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        user: action.payload,
        userError: ''
      }
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
        userError: ''
      }
    case USER_LOGOUT:
      return {
        user: '',
        userError: ''
      }

    case ERROR:
      return {
        ...state,
        userError: action.payload
      }
    default:
      return state
  }
}