import styled from "styled-components";

import colors from "../../styles/colors";

export const ContainerCard = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    height: 18rem;
    width: 18rem;

    background: ${colors.gray100} url('/github-background.jpg') no-repeat right top;
    background-size: cover;

    box-shadow: 0 0 10px 1px rgba(5, 16, 39, .3);

    &:hover {
        align-items: center;
        opacity: .5;

        strong {
            display: none;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;

            text-align: center;
        }
    }

    strong {
        width: 100%;

        padding: 0 .3125rem;

        margin-bottom: 1rem;

        color: ${colors.blackDark};

        font-size: 1.5rem;
        text-align: center;
        word-wrap: break-word;
    }

    a {
        display: none;

        width: 100%;
        
        margin-bottom: 1rem;

        color: ${colors.backgroundBody};

        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    }

    @media(max-width: 1000px) {
        height: 16rem;
        width: 16rem;
    }

    @media(max-width: 900px) {
        height: 14rem;
        width: 14rem;

        strong {
            font-size: 1.25rem;
        }
    }

    @media(max-width: 750px) {
        height: 12rem;
        width: 12rem;

        strong {
            font-size: 1rem;

            margin-bottom: .5rem;
        }
    }

    @media(max-width: 610px) {
        height: 10rem;
        width: 10rem;

        strong {
            font-size: .875rem;
        }

        a {
            font-size: .875rem;
        }
    }

    @media(max-width: 510px) {
        height: 8rem;
        width: 8rem;

        strong {
            margin-bottom: .3125rem;
        }
    }

    @media(max-width: 400px) {
        height: 6rem;
        width: 6rem;

        strong {
            font-size: .75rem;
        }
    }
`;