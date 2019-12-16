import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import apiReducer from './api.reducer';

export default combineReducers({
    user: userReducer,
    apiData: apiReducer
})