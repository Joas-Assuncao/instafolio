import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { BookmarkSimple, ChatCircle, Heart, PaperPlaneTilt } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { apiGithubForRepo } from '../../api';
import { IRepoGithub } from '../../interfaces';

import { Container } from './styles';

export default function Post() {
    const { query } = useRouter();
    const [repoData, setRepoData] = useState<IRepoGithub | null>(null);

    useEffect(() => {
        apiGithubForRepo.get(`/${query.id}`)
            .then(response => response.data)
            .then((dataReposUser: IRepoGithub) => setRepoData(dataReposUser))
            .catch(err => console.error(err));
    }, []);

    return (
        <Container>
            <div className="content">
                <header>
                    <img src={repoData?.owner.avatar_url} alt="Icon profile" />
                    <div className="name-location">
                        <span>
                            <a href={repoData?.owner.html_url} target="_blank">
                                {repoData?.owner.login}
                            </a>
                        </span>
                        <small>
                            Language with more relevance: {repoData?.language}
                        </small>
                    </div>
                </header>
                <div className="container-image">
                    <img src="/github-background.jpg" alt="Github image" />
                </div>
                <footer>
                    <div className="interactions">
                        <div className="icons">
                            <div className="primary-icons">
                                <Heart size={24} weight="bold" />
                                {/* <Heart size={24} color="#ed4956" weight="fill" /> */}
                                <ChatCircle size={24} weight="bold" />
                                <PaperPlaneTilt size={24} weight="bold" />
                            </div>
                            <div className="bookmark-icon">
                                <BookmarkSimple size={24} weight="bold" />
                            </div>
                        </div>
                        <div className="numbers-interactions">
                            Likes (stars in the repo): {repoData?.stargazers_count}
                        </div>
                    </div>
                    <p>
                        <span>
                            <a href={repoData?.owner.html_url} target="_blank">
                                {repoData?.owner.login}
                            </a>
                        </span> {repoData?.description}
                    </p>

                    <small>{format(new Date(repoData ? repoData.created_at : new Date()), "MMMM d', ' yyyy")}</small>
                </footer>
            </div>
        </Container>
    );
}
