import styled from "styled-components";

export const Container = styled.div`
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