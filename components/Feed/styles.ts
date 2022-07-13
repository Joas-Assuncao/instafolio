import styled from "styled-components";

import colors from "../../styles/colors";

export const ContainerFeed = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${colors.backgroundBody};

    border-top: 1px solid ${colors.gray200};

    div.navigation {
        display: flex;
        align-items: center;
        
        margin-top: -1px;
        padding: 1rem .5rem;
        
        border-top: 1px solid ${colors.blackDark};
        
        svg {
            height: 24px;
            width: 24px;
        }

        span {
            margin-left: 1rem;
            font-size: 1rem;
        }
    }

    div.cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    @media(max-width: 800px) {
        div.navigation {
            border: none;
            padding: .5rem .25rem;

            svg {
                color: #0095F6;
            }

            span {
                display: none;
            }
        }

        div.cards {
            gap: .3125rem;
        }
    }

    @media(max-width: 610px) {
        div.cards {
            gap: .0625rem;
        }
    }

    @media(max-width: 510px) {
        div.navigation {
            svg {
                height: 20px;
                width: 20px;
            }
        }
    }
`;