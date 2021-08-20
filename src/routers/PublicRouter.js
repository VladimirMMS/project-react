import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';

function PublicRouter(props) {
    
    const { isLogged } = useAuth();

    if(isLogged()) return <Redirect to= "/projects"/>

    return (
        <Route {...props}/>
    )
}

export default PublicRouter;