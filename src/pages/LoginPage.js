import React from 'react';
import useAuth from '../auth/useAuth';

const userCredentials = {};

function LoginPage() {
    
    const {login} = useAuth();
    

   
    return (
        <div>
            <button onClick= {()=> login(userCredentials)}>Login</button>
        </div>
    );
}

export default LoginPage;