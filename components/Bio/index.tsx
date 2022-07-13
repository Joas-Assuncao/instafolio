import { useEffect, useState } from 'react';

import { apiForPersonalInfo } from '../../api';

import { Container } from './styles';

export function Bio() {
    const [iconProfile, setIconProfile] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [bioUser, setBioUser] = useState('');
    const [locationUser, setLocationUser] = useState('');
    const [publicRepos, setPublicRepos] = useState(0);
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);

    useEffect(() => {
        apiForPersonalInfo.get('')
            .then(response => response.data)
            .then(dataProfileUser => {
                setIconProfile(dataProfileUser.avatar_url);
                setNameUser(dataProfileUser.login);
                setPublicRepos(dataProfileUser.public_repos);
                setFollowers(dataProfileUser.followers);
                setFollowing(dataProfileUser.following);
                setBioUser(dataProfileUser.bio);
                setLocationUser(dataProfileUser.location);
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <Container>
            <div className="icon-profile-container">
                <img src={iconProfile} alt="Icon profile" />
            </div>
            <div className="infos">
                <h3 className="name">{nameUser}</h3>
                <div className="numbers-github">
                    <div>
                        <span>{publicRepos} </span>public repos
                    </div>
                    <div>
                        <span>{followers} </span>followers
                    </div>
                    <div>
                        <span>{following} </span>following
                    </div>
                </div>
                <p className="bio">
                    {bioUser}
                </p>
                <div className="location">
                    {locationUser}
                </div>
            </div>
        </Container>
    );
}
