import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        const adminStatus = sessionStorage.getItem('isAdmin');
        setIsLoggedIn(!!userId); // Check if a user is logged in
        setIsAdmin(adminStatus === 'true'); // Check if the user is an admin
    }, []);

    const loginUser = (userId, userRole) => {
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('isAdmin', userRole === 'admin');
        setIsLoggedIn(true);
        setIsAdmin(userRole === 'admin');
    };

    const logoutUser = () => {
        sessionStorage.clear();
        setIsLoggedIn(false);
        setIsAdmin(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, isAdmin, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};
