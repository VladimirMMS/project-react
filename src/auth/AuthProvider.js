import { createContext, useState } from "react";
import { useHistory } from "react-router";


export const AuthContext = createContext()

function AuthProvider({children}) {

    const history = useHistory()
    const [user, setUser ] = useState(null)

    const login = (userCredentials, fromLocation) => {
        setUser({id:1,name:"Vladimir", email:"vladimirmercado2001@gmail.com",role:"admin"})
        if(fromLocation) {
            history.push(fromLocation)
        }
    }
    const logout = () => setUser(null)

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;

    const updateUser = (newData) => {
        setUser({
            ...user,   
            ...newData
        })
    }

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout,
        setUser,
        updateUser   
    }

    return (
        <AuthContext.Provider value= {contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;