import React, { useRef, useCallback } from 'react';
import { FiArrowLeft, FiUser, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core'; 

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, Background } from './styles';


const SigUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback((data: object): void => {
        console.log(data);
    }, []);

    return (
        <Container>
            <Background />
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input icon={FiUser} name="email" placeholder="E-mail" />
                    <Input icon={FiLock} name="senha" type="password" placeholder="Senha" />

                    <Button type="submit">Cadastrar</Button>
                </Form>

                <a href="./">
                    <FiArrowLeft />
                    Voltar para o login
                </a>
            </Content>
        </Container>
    )
};

export default SigUp;
