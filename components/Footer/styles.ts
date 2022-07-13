import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerFooter = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;

    width: 100%;

    padding: 1rem 2rem;

    text-align: center;
    
    background: ${colors.white};

    border-top: 1px solid ${colors.gray200};
`;
