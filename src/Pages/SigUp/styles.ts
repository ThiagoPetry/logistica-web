import styled from 'styled-components';
import { shade } from 'polished';

import backgroundSigUp from '../../assets/entregador.jpg';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;
    max-width: 700px;

    form {
        marign: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#f4ede8')}
            }
        }
    }

    > a {
        color: #228B22;
        display: block;
        margin-top: 64px;
        text-decoration: none;
        
        display: flex;
        align-items: center;

        transition: color 0.2s;

        svg {
            margin-right: 6px;
        }

        &:hover {
            color: ${shade(0.2, '#228B22')}
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundSigUp}) no-repeat center;
    background-size: cover;
    box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.5);
`;