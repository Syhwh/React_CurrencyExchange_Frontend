import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SocketManager from '../helpers/webSocket.context';
import LoginFormContainer from '../components/Login/LoginFormContainer';
import SignupFormContainer from '../components/Signup/SignupFormContainer';
import UserExchangesContainer from '../components/UserExchanges/UserExchangesContainer';
import Home from '../components/Home/Home';
import PrivateRoute from '../components/Commons/PrivateRoute'

export default [
  <Switch key='routes'>
    <Route exact path='/login' component={LoginFormContainer} />
    <Route exact path='/signup' component={SignupFormContainer} />
    <PrivateRoute exact path='/exchanges' component={UserExchangesContainer} />
    <SocketManager>
      <Route exact path='/' component={Home} />
    </SocketManager>
  </Switch>
]