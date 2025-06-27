import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import AuthContext from './AuthContext';
import auth from '../firebase.config';
import { useEffect, useState } from 'react';

// export const AuthContext = createContext(null);   // this line is working from AuthContext.jsx
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    // Create Firebase User: go to register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Sign In Firebase User: go to Login
    const signInUser= (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Sign In Google User: go to Login
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Observer of User
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log("state captured:", currentUser);
        });

        return () => unsubscribe(); 
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle 
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;