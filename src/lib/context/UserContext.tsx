'use client'

import React, { createContext, useReducer, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode"; // Ensure to import correctly

interface AuthContextType {
    user: any | null;
    login: (userData: { accessToken: string }) => void;
    logout: () => void;
    userComplete?: boolean;
    setUserComplete?: any;
}

interface CustomJwtPayload {
    exp?: number;
    [key: string]: any; // Add other fields as needed
}

// Define the shape of the state
interface State {
    user: CustomJwtPayload | null;
}

const initialState: State = {
    user: null,
};

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {},
});

const reducer = (state: State, action: { type: string; payload?: any }) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

   

    const login = (userData: { accessToken: string }) => {
        localStorage.setItem('accessToken', userData.accessToken);
        try {
            const decodedToken = jwtDecode<CustomJwtPayload>(userData.accessToken);
            dispatch({
                type: 'LOGIN',
                payload: { ...userData, ...decodedToken }, // Include decoded token data
            });
        } catch (error) {
            console.error('Failed to decode JWT:', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        dispatch({ type: 'LOGOUT' });
    };

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const decodedUser = jwtDecode<CustomJwtPayload>(token);
                dispatch({
                    type: 'LOGIN',
                    payload: {accessToken: token, ...decodedUser }, // Ensure payload includes access token
                });
            } catch (error) {
                console.error('Failed to decode JWT on initial load:', error);
                localStorage.removeItem('accessToken'); // Remove token if decoding fails
            }
        }
    }, []);

    //to check if user information is complete
    const [userComplete, setUserComplete] = useState(false);

    return (
        <AuthContext.Provider value={{userComplete, setUserComplete, user: state.user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// For server-side rendering in Next.js
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    );
};
