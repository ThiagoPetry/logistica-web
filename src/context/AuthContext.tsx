import React, { createContext, useCallback } from "react";

import api from '../service/api';

interface SingInCredentials {
    email: string;
    senha: string;
}

interface AuthContextData {
    user: string;
    singIn(credentials: SingInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
    const singIn = useCallback(async ({ email, senha }) => {
        const response = await api.post("authenticate", {
            email,
            senha,
        });

        console.log(response.data);
    }, []);

    return (
        <AuthContext.Provider value={{user: "Thiago", singIn}}>
            {children}
        </AuthContext.Provider>
    );
}