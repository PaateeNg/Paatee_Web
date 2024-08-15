'use client'
//This is used for both Navbar and footer
import React from "react";
import { ReactElement, useState, createContext } from "react";

interface NavbarType {
    showNavbar: boolean;
    setShowNavbar : React.Dispatch<React.SetStateAction<boolean>>
}

export const NavbarContext = createContext<NavbarType | null>(null);

export const  NavbarContextProvider = ({ children }: { children: ReactElement }) => {
    const [showNavbar, setShowNavbar] = useState(true)
    return (
        <NavbarContext.Provider value={{
            showNavbar,
            setShowNavbar
        }}>
            {children}
        </NavbarContext.Provider>
    )
}


// Created this component so that we can rap the LayoutRouter.tsx
export const NavbarProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <NavbarContextProvider>
           <React.Fragment>{children}</React.Fragment>
        </NavbarContextProvider>
    )
}