import styled, { css } from "styled-components";

import Tooltip from "../Tooltip";

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
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
        color: #228B22;
        border-color: #228B22;
    `}

    ${props => props.isFilled && css`
        color: #228B22;
    `}

    ${props => props.isErrored && css`
        border-color: #c53030;
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

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;