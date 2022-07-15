import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.header`
    display: flex;
    align-items: flex-start;
    gap: 7rem;
    
    margin-bottom: 5rem;

    padding: 0 1rem;

    .icon-profile-container {
        img {
            border-radius: 50%;
            height: 9.375rem;
            width: 9.375rem;

            border: 4px solid ${colors.backgroundBody};

            box-shadow: 0 0 0 2px rgba(220, 220, 220, 1);
        }
    }

    .infos {
        display: flex;
        flex-direction: column;
        
        .name {
            font-size: 1.75rem;
            font-weight: 300;
            margin-bottom: 2rem;
        }

        .numbers-github {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;

            div {
                font-size: 1rem;

                span {
                    font-weight: bold;
                }
                
                &:not(:last-of-type) {
                    margin-right: 2rem;
                }
            }
        }

        .bio {
            max-width: 21.875rem;
            
            margin-bottom: 2rem;

            font-size: 1rem;
        }

        .location {
            font-weight: bold;
        }
    }

    @media(max-width: 800px) {
        margin-bottom: 2.5rem;
        gap: 2rem;

        .icon-profile-container {
            img {
                height: 7.5rem;
                width: 7.5rem;
            }
        }

        .infos {
            .name {
                font-size: 1.25rem;
                margin-bottom: 1rem;
            }

            .numbers-github {
                margin-bottom: 1rem;

                div {
                    font-size: .75rem;

                    &:not(:last-of-type) {
                        margin-right: 1rem;
                    }
                }
            }

            .bio {
                margin-bottom: 1rem;
                font-size: .875rem;
            }
        }
    }

    @media(max-width: 430px) {
        margin-bottom: 1.5rem;
        gap: 1rem;

        .icon-profile-container {
            img {
                height: 5rem;
                width: 5rem;
            }
        }

        .infos {
            .numbers-github {
                display: flex;
                align-items: flex-start;
                margin-bottom: .75rem;
                flex-direction: column;

                div {
                    margin: 0;
                    &:not(:last-of-type) {
                        margin-bottom: .25rem;
                    }
                }
            }
        }
    }
`;