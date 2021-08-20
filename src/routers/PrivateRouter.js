import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';

function PrivateRouter({hasRole: role, ...rest}) {
    
    const { hasRole, isLogged } = useAuth();

    if(role && !hasRole(role)) return <Redirect to= "/"/>

    if(!isLogged()) return <Redirect to= "/login"/>

    return (
        <Route {...rest}/>
    )
}

export default PrivateRouter;