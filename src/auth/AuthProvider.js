import { createContext, useState } from "react";



export const AuthContext = createContext()

function AuthProvider({children}) {

    
    const [user, setUser ] = useState(null)

    const login = (userCredentials) => setUser({id:1,name:"vladimir", role:"admin"})

    const logout = () => setUser(null)

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;


    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout,
        
    }

    return (
        <AuthContext.Provider value= {contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;