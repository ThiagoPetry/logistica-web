import React from 'react';
import { FiArrowLeft, FiUser, FiLock } from 'react-icons/fi';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, Background } from './styles';


const SigUp: React.FC = () => (
    <Container>
        <Background />
        <Content>
            <form>
                <h1>Faça seu cadastro</h1>

                <Input icon={FiUser} name="email" placeholder="E-mail" />
                <Input icon={FiLock} name="senha" type="password" placeholder="Senha" />

                <Button type="submit">Cadastrar</Button>
            </form>

            <a href="./">
                <FiArrowLeft />
                Voltar para o login
            </a>
        </Content>
    </Container>
);

export default SigUp;
