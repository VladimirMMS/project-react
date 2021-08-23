import React from 'react';
import { useLocation } from 'react-router';
import useAuth from '../auth/useAuth';

const userCredentials = {};

function LoginPage() {
    
    const location = useLocation()
    const {login} = useAuth();
    

   
    return (
        <div>
            <button onClick= {()=> login(userCredentials, location.state?.from)}>Login</button>
        </div>
    );
}

export default LoginPage;