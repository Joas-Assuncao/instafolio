import { GithubLogo, LinkedinLogo, MagnifyingGlass } from 'phosphor-react';
import { useContext } from 'react';


import { LogoActivity } from '../Icons/LogoActivity';
import { LogoHome } from '../Icons/LogoHome';

import Link from 'next/link';
import { DataUserContext } from '../../contexts/DataUserContext';
import colors from '../../styles/colors';
import { Container } from './styles';

export function Header() {
    const dataUser = useContext(DataUserContext);

    return (
        <Container>
            <div className="content">
                <Link href="/">
                    <a>
                        <h2 className="title">Instafólio</h2>
                    </a>
                </Link>

                <div className="search-content">
                    <MagnifyingGlass
                        size={16}
                        color={colors.gray400}
                        weight="bold"
                    />
                    <input
                        type="text"
                        name="search"
                        className="search"
                        id="search"
                        placeholder="Search"
                    />
                </div>

                <nav className="icons">
                    <LogoHome />
                    <a target="_blank" href="https://github.com/Joas-Assuncao">
                        <GithubLogo size={28} color="#272b33" weight="fill" />
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/Joas-Assuncao">
                        <LinkedinLogo size={28} color="#0a66c2" weight="fill" />
                    </a>
                    <LogoActivity />
                    <img src={dataUser?.avatar_url} alt="Icon profile" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                </nav>
            </div>
        </Container>
    )
}