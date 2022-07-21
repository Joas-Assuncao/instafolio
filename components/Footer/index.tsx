import { GithubLogo, LinkedinLogo } from 'phosphor-react';

import { ContainerFooter } from './styles';

export function Footer() {
    return (
        <ContainerFooter>
            <p>Portfolio developed by Joas Assunção</p>
            <div className="contact">
                <a target="_blank" href="https://github.com/Joas-Assuncao">
                    <GithubLogo size={32} color="#272b33" weight="fill" />
                </a>
                <a target="_blank" href="https://linkedin.com/in/Joas-Assuncao">
                    <LinkedinLogo size={32} color="#0a66c2" weight="fill" />
                </a>
            </div>
        </ContainerFooter>
    );
}