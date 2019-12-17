/* eslint-disable react/prop-types */
import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import currencyApi from '../utils/api.configuration';

export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return history.push('/');
    currencyApi.post('/verify', null, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then(({ data }) => {
        setUser(data)
        history.push('/')
      })
      .catch(() => history.push('/'))
    return function cleanup() { };
  }, []);

  function authLoginUser(id) {
    setUser(id)
  }
  function authLogOutUser() {
    setUser(null);
    history.push('/login');
  }
  return (
    <AuthContext.Provider value={{
      user,
      authLoginUser,
      authLogOutUser
    }}>
      {children}
    </AuthContext.Provider>
  )

}