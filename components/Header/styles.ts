import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.header`
    display: flex;
    justify-content: center;

    padding: .5rem 0;

    border-bottom: 1px solid ${colors.gray200};

    div.content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 80%;

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
        }
    }
`;
