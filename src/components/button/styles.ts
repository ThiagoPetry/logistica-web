import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    background: #228B22;
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
        background: ${shade(0.2, '#228B22')}
    }
`;