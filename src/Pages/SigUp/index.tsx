import React, { useRef, useCallback } from 'react';
import { FiArrowLeft, FiUser, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core'; 
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

//yarn add yup  
//yarn add -D @types/yup

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, Background } from './styles';


const SigUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Informe um e-mail válido'),
                senha: Yup.string().min(6, 'No mínimo 6 digitos'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })
        } catch(err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
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
