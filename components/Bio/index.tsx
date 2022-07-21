import { useContext } from 'react';
import { DataUserContext } from '../../contexts/DataUserContext';

import { Container } from './styles';

export function Bio() {
    const dataUserContext = useContext(DataUserContext);

    return (
        <Container>
            <div className="icon-profile-container">
                <img src={dataUserContext?.avatar_url} alt="Icon profile" />
            </div>
            <div className="infos">
                <h3 className="name">{dataUserContext?.login}</h3>
                <div className="numbers-github">
                    <div>
                        <span>{dataUserContext?.public_repos} </span>public repos
                    </div>
                    <div>
                        <span>{dataUserContext?.followers} </span>followers
                    </div>
                    <div>
                        <span>{dataUserContext?.following} </span>following
                    </div>
                </div>
                <p className="bio">
                    {dataUserContext?.bio}
                </p>
                <div className="location">
                    {dataUserContext?.location}
                </div>
            </div>
        </Container>
    );
}
