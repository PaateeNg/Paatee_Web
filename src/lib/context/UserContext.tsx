'use client'
// import { jwtDecode } from "jwt-decode";
import React, {ReactElement, createContext, useReducer } from "react";


interface AuthContextType {
    user: any | null;
    login: (userData: any) => void;
    logout: () => void;
}
interface CustomJwtPayload {
    exp?: number;
    [key: string]: any; // Add other fields as needed
}

const initialState: { user: CustomJwtPayload | null } = {
    user: null,
};

// // Ensure this code runs only in the browser
// if (
//     // typeof window !== 'undefined' && 
//     localStorage.getItem('jwtToken')) {
//     const token = localStorage.getItem('jwtToken');
    
//     if (token) {
//         const decodedToken = jwtDecode(token);
        
//         // Check if 'exp' exists and is valid
//         if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
//             localStorage.removeItem("jwtToken");
//         } else if (decodedToken.exp) {
//             initialState.user = decodedToken;
//         }
//     }
// }


export const AuthContext = createContext<AuthContextType>({
    user:null,
    login : () => {},
    logout : () => {}
})

interface State {
    user: any | null;
}

const reducer = (state: State, action: { type: string; payload?: any }) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user : null
            }
        default:
            return state;
    }
}

export const AuthContextProvider = ({children} : {children: ReactElement}) => {
   const [state, dispatch] =  useReducer(reducer, initialState)

   const login = (userData: any) => {
    // localStorage.setItem('jwtToken', userData.accessToken);
    dispatch({
        type: 'LOGIN',
        payload: userData,
    });
};

    const logout = () => {
        // localStorage.removeItem('jwtToken');
        dispatch({ type: 'LOGOUT' });
    };

   return <AuthContext.Provider value={{ user : state.user, login, logout}}>
            {children}  
        </AuthContext.Provider>
}


//for server wrapping in layout.tsx
export const AuthProvider = ({children} : {children: React.ReactNode}) => {
    return (
        <AuthContextProvider>
            <React.Fragment>{children}</React.Fragment>
        </AuthContextProvider>
    )
}