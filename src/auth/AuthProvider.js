import { createContext, useState } from "react";


export const AuthContext = createContext()

function AuthProvider({children}) {

    const [user, setUser ] = useState({ïd:1, name:"Vladimir"})

    const contextValue = {
        user,
    }

    return (
        <AuthContext.Provider value= {contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;