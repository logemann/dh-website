"use client";
// ThemeProvider component using <ThemeContext> directly as a provider
import {createContext, useState} from "react";

export const ThemeContext =
    createContext<{
        theme: {
            mode: string,
            colors: {
                background: string,
                text: string,
            },
        }, toggleTheme: () => void
    } | null>(null);

export const ThemeProvider = ({children}: { children: React.ReactNode, }) => {
    const [theme, setTheme] = useState({
        mode: 'light',
        colors: {
            background: '#fff',
            text: '#000',
        },
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            return prevTheme.mode === 'light'
                ? {
                    mode: 'dark',
                    colors: {
                        background: '#333',
                        text: '#fff',
                    },
                }
                : {
                    mode: 'light',
                    colors: {
                        background: '#fff',
                        text: '#000',
                    },
                };
        });
    };

    return (
        <ThemeContext value={{theme, toggleTheme}}>
            {children}
        </ThemeContext>
    );
};
