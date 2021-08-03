import React, { createContext, useCallback, useState, useContext } from "react";

import api from '../service/api';

interface AuthState {
    jwt: string;
}

interface SingInCredentials {
    email: string;
    senha: string;
}

interface AuthContextData {
    singIn(credentials: SingInCredentials): Promise<void>;
    singOut(): void;
}

const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const jwt = localStorage.getItem("@Logistica:token");

        if(jwt) {
            return {jwt};
        }

        return {} as AuthState;
    });

    const singIn = useCallback(async ({ email, senha }) => {
        const response = await api.post("authenticate", {
            email,
            senha,
        });

        console.log(response.data);
        const { jwt } = response.data;

        localStorage.setItem("@Logistica:token", jwt);
        setData(jwt);       
    }, []);

    const singOut = useCallback(() => {
        localStorage.removeItem("@Logistica:token");

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{singIn, singOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must be used withing an AuthProvider');
    }

    return context;
}