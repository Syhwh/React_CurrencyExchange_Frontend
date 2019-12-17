import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SocketManager from '../helpers/webSocket.context';
import LoginFormContainer from '../components/Login/LoginFormContainer';
import SignupFormContainer from '../components/Signup/SignupFormContainer';
import UserExchanges from '../components/UserExchanges/UserExchanges';
import Home from '../components/Home/Home';
import PrivateRoute from '../components/Commons/PrivateRoute'

export default [
  <Switch key='routes'>
    <Route exact path='/login' component={LoginFormContainer} />
    <Route exact path='/signup' component={SignupFormContainer} />
    <PrivateRoute exact path='/exchanges' component={UserExchanges} />
    <SocketManager>
      <Route exact path='/' component={Home} />
    </SocketManager>
  </Switch>
]