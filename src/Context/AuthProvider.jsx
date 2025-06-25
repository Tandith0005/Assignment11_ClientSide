import React from 'react';
import AuthContext from './AuthContext';

// export const AuthContext = createContext(null);   // this line is working from AuthContext.jsx
const AuthProvider = ({children}) => {

    const authInfo = {
        user:'Sadnan'
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;