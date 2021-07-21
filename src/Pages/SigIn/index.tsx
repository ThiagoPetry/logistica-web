import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import Input from '../../components/input';

import { Container, Content, Background } from './styles';


const SigIn: React.FC = () => (
    <Container>
        <Content>
            <form>
                <h1>Faça seu login</h1>

                <Input name="email" placeholder="E-mail" />
                <Input name="senha" type="password" placeholder="Senha" />

                <button type="submit">Entrar</button>

                <a href="./">Esqueci minha senha</a>
            </form>

            <a href="./">
                <FiLogIn />
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SigIn;