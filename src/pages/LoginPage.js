import React from 'react';
import useAuth from '../auth/useAuth';

function LoginPage(props) {
    
    const {user} = useAuth();

    console.log(user)

    
   
    return (
        <div>
            <h1>LoginPage</h1>
        </div>
    );
}

export default LoginPage;