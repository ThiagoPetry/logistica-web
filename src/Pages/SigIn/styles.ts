import styled from 'styled-components';
import { shade } from 'polished';

import backgroundSigIn from '../../assets/estoque.jpg';

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

        button {
            background: #ff9000;
            height: 40px;
            font-weight: bold;
            border-radius: 10px;
            border: 0;
            padding: 0 16px;
            color: #312e18;
            width: 40%;
            margin-top: 24px;
            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.2, '#ff9000')}
            }
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
        color: #ff9000;
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
            color: ${shade(0.2, '#ff9000')}
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundSigIn}) no-repeat center;
    background-size: cover;
    box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.5);
`;