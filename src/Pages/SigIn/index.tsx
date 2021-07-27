import React, { useRef, useCallback, useContext } from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { AuthContext } from '../../context/AuthContext';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, Background } from './styles';

interface SingInFormData {
    email: string;
    senha: string;
}

const SigIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { singIn } = useContext(AuthContext);

    const handleSubmit = useCallback(async (data: SingInFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Informe um e-mail válido'),
                senha: Yup.string().required('Senha obrigatória'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            singIn({
                email: data.email,
                senha: data.senha
            })
        } catch(err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    }, [singIn]);

    return (
        <Container>
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu login</h1>

                    <Input icon={FiMail} name="email" placeholder="E-mail" />
                    <Input icon={FiLock} name="senha" type="password" placeholder="Senha" />

                    <Button type="submit">Entrar</Button>

                    <a href="./">Esqueci minha senha</a>
                </Form>

                <a href="./">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>
    )
};

export default SigIn;
