import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';

function PrivateRouter(props) {
    
    const {user} = useAuth();

    if(!user) return <Redirect to= "/login"/>

    return (
        <Route {...props}/>
    )
}

export default PrivateRouter;