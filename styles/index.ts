import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        outline: none;
        text-decoration: none;
        border: none;
    }

    html {
        font-family: 'Loto', sans-serif;
    }
`;

export const ContainerMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    width: 100%;
    max-width: 935px;
`;