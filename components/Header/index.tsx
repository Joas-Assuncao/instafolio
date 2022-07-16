import { MagnifyingGlass } from 'phosphor-react';
import { useEffect, useState } from 'react';

import { apiGithub } from '../../api';

import { LogoActivity } from '../Icons/LogoActivity';
import { LogoFindPeople } from '../Icons/LogoFindPeople';
import { LogoHome } from '../Icons/LogoHome';
import { LogoMessenger } from '../Icons/LogoMessenger';
import { LogoNewPost } from '../Icons/LogoNewPost';

import Link from 'next/link';
import colors from '../../styles/colors';
import { Container } from './styles';

export function Header() {
    const [iconProfile, setIconProfile] = useState('');
    useEffect(() => {
        apiGithub.get('')
            .then(response => response.data)
            .then(dataProfileUser => {
                setIconProfile(dataProfileUser.avatar_url);
            })
            .catch(err => console.error(err));
    });

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
                    <LogoMessenger />
                    <LogoNewPost />
                    <LogoFindPeople />
                    <LogoActivity />
                    <img alt="Icon profile" style={{ width: '32px', height: '32px', borderRadius: '50%' }} src={iconProfile} />
                </nav>
            </div>
        </Container>
    )
}