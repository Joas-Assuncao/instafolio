import styled from 'styled-components';
import colors from '../styles/colors';

export const ContainerPost = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;

    div.content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        border: 1px solid ${colors.gray200};
        border-radius: .5rem;

        header {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 1rem;

            padding: .625rem;

            a {
                color: ${colors.blackDark};
            }

            img {
                height: 2.5rem;
                width: 2.5rem;

                border-radius: 50%;
            }

            div.name-location {
                display: flex;
                flex-direction: column;
                gap: .25rem;

                span {
                    font-size: .875rem;
                    font-weight: 600;
                    
                    a {
                        color: ${colors.blackDark};
                    }
                }

                small {
                    font-size: .75rem;
                }
            }
        }

        div.container-image {
            img {
                width: 29.375rem;
                height: 29.375rem;
            }
        }

        footer {
            max-width: 29.375rem;

            padding: .625rem;

            div.interactions {
                div.icons {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    
                    width: 100%;

                    padding: .5rem 0;

                    div.primary-icons {
                        svg:not(:first-of-type) {
                            margin-left: .75rem;
                        }
                    }
                }

                div.numbers-interactions {
                    margin-bottom: .5rem;
                }
            }

            p {
                font-size: .875rem;
                font-weight: 300;

                span {
                    font-weight: 600;

                    a {
                        color: ${colors.blackDark};
                    }
                }
            }

            small {
                font-size: .75rem;
                font-weight: 400;
                color: ${colors.gray400};
            }
        }
    }
`;
