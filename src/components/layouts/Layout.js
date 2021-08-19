import React from 'react';
import Navigation from '../Navigaction';

function Layout({children}) {
    return (
        <>
            <Navigation/>
            {children}
           
        </>
    );
}

export default Layout;