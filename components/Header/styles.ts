import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.header`
    display: flex;
    justify-content: center;
    z-index: 1;
    width: 100%;
    
    padding: .5rem 0;
    margin-bottom: 1.25rem;

    background: ${colors.white};

    border-bottom: 1px solid ${colors.gray200};

    div.content {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        width: 100%;

        h2.title {
            color: ${colors.blackDark};

            font-size: 2.5rem;
            font-weight: normal;
            font-family: 'Grand Hotel', cursive;
        }

        div.search-content {
            display: flex;
            align-items: center;
            gap: .75rem;

            background: ${colors.gray100};

            padding: .75rem 1rem;

            border-radius: .75rem;

            opacity: .75;

            input.search {
                background: transparent;
                color: ${colors.blackLight};

                border: none;

                &:placeholder {
                    font-weight: 100;
                    font-size: 1rem;
                    color: ${colors.gray400};
                }
            }
        }

        nav.icons {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;

            a {
                height: 28px;
                width: 28px;
            }
        }
    }

    @media(max-width: 780px) {
        div.content {
            h2.title {
                font-size: 2rem;
            }

            nav.icons {
                svg {
                    display: none;
                }
            }
        }
    }

    @media(max-width: 650px) {
        div.content {
            h2.title {
                font-size: 1.75rem;
            }

            div.search-content {
                gap: .5rem;
                padding: .5rem .5rem;

                svg {
                    width: .75rem;
                    height: .75rem;
                }

                input.search {
                    font-size: .75rem;
                }
            }
        }
    }
`;
