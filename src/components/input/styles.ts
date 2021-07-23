import styled, { css } from "styled-components";

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: transparent;
    border: 0;
    padding: 12px;
    border-bottom: 2px solid #fff;
    width: 100%;
    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${props => props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}

    ${props => props.isFilled && css`
        color: #ff9000;
    `}

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #f4ede8;

        &::placeholder {
            color: #a8a8a8;
        }
    }

    svg {
        margin-right: 10px;
    }
`;