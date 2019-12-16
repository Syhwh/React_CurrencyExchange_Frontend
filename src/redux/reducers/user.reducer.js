import { USER_REGISTER, USER_LOGIN, USER_LOGOUT, ERROR } from '../actions/types.action';

const initialState = {
  user: '',
  error: ''
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        user: action.payload,
        error: ''
      }
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
        error: ''
      }
    case USER_LOGOUT:
      return {
        ...state,
        user: '',
        error: ''
      }

    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}