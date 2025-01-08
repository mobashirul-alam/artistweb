"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LoadingContext = createContext({
    isLoading: true,
    setIsLoading: () => {},
});

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set loading to false when all resources are loaded
        const handleLoad = () => {
            setIsLoading(false);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within LoadingProvider");
    }
    return context;
};
