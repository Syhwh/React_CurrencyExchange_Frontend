/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../helpers/authentication.context';

export default function PrivateRoute({ path, component, exact }) {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('token')
    if (!user || !token) return <Redirect to='/login' />
    return (
        <Route exact={exact} path={path} component={component} />
    )
}
