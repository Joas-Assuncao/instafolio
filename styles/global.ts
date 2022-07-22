import styled, { createGlobalStyle } from "styled-components";

import colors from "./colors";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        text-decoration: none;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;

        border: none;
        
        outline: none;

        box-sizing: border-box;
    }

    html {
        font-family: 'Lato', sans-serif;
    }

    body {
        min-height: 100vh;
    
        background: ${colors.backgroundBody};
    }

    @media(max-width: 500px) {
        html {
            font-size: 93.75%;
        }
    }
`;

export const ContainerMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    margin: 0 auto;
    
    height: 100%;
    
    width: 100%;
    max-width: 935px;
`;