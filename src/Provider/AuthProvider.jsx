
import React, { createContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
function AuthProvider({ children }) {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // handle register 
    const register = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // handle login
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update user profile
    const updateUser = (user,name, url) => {
        return updateProfile(user, {
            displayName: name, photoURL: url
          })
    }
    // login with google
    const googleLogin = () =>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    // login with github
    const githubLogin = () =>{
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }
    // handle log out
    const logOut = () => {
        return signOut(auth)
    }
    // observer user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoader(false)
            setUser(currentUser)
        });
        return () => unsubscribe()
    }, [])

    const userInfo = {
        user,
        register,
        login,
        logOut,
        updateUser,
        googleLogin,
        githubLogin,
        loader
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
