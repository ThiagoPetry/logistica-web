import styled from "styled-components";

export const Container = styled.div`
    border-radius:  10px;
    background: transparent;
    border: 0;
    border-bottom: 2px solid #fff;
    padding: 12px;
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
`;