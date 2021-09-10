import React, { useState, useEffect } from "react";

import api from "../../service/api";

import { Container, Box } from './styles';

interface Pessoa {
    nomePessoa: string;
    telefonePessoa: string;
}

const Dashboard: React.FC = () => {
    const [ pessoas, setPessoas ] = useState<Pessoa[]>([]);

    useEffect(() => {
        api.get(`/pessoas`).then(response => {
            setPessoas(response.data);
        });
    }, []);

    console.log(pessoas);

    return (
        <>
        <Container>
            <h1>Dashboard</h1>

            <Box>
                {pessoas.map(pessoa => (
                    <div>
                        <p>{pessoa.nomePessoa}</p>
                        <p>{pessoa.telefonePessoa}</p>
                    </div>
                ))}
            </Box>
        </Container>
        </>
    );
}

export default Dashboard;

