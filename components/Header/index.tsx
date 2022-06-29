import { MagnifyingGlass } from 'phosphor-react';
import colors from '../../styles/colors';
import { LogoActivity } from '../Icons/LogoActivity';
import { LogoFindPeople } from '../Icons/LogoFindPeople';
import { LogoHome } from '../Icons/LogoHome';
import { LogoMessenger } from '../Icons/LogoMessenger';
import { LogoNewPost } from '../Icons/LogoNewPost';
import { Container } from './styles';

export function Header() {
    return (
        <Container>
            <div className="content">
                <h2 className="title">Instafólio</h2>

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
                    <img alt="joas_junior_'s profile" className="" style={{ width: '32px', height: '32px', borderRadius: '50%' }} src="https://github.com/Joas-Assuncao.png" />
                </nav>
            </div>
        </Container>
    )
}