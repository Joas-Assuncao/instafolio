import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { BookmarkSimple, ChatCircle, Heart, PaperPlaneTilt } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { getRepoAPI } from '../../api';
import { DataUserContext } from '../../contexts/DataUserContext';
import { IRepoGithub } from '../../interfaces';

import { ContainerPost } from '../../styles/postStyle';

export default function Post() {
    const dataUser = useContext(DataUserContext);

    const { query } = useRouter();
    const [repoData, setRepoData] = useState<IRepoGithub | null>(null);

    useEffect(() => {
        getRepoAPI.get(`/${query.id}`)
            .then(response => response.data)
            .then((dataReposUser: IRepoGithub) => setRepoData(dataReposUser))
            .catch(err => console.error(err));
    }, [query.id]);

    return (
        <ContainerPost>
            <div className="content">
                <header>
                    <img src={dataUser?.avatar_url} alt="Icon profile" />
                    <div className="name-location">
                        <span>
                            <a href={dataUser?.html_url} target="_blank">
                                {dataUser?.login}
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
                            <a href={dataUser?.html_url} target="_blank">
                                {dataUser?.login}
                            </a>
                        </span> {repoData?.description}
                    </p>

                    <small>{format(new Date(repoData ? repoData.created_at : new Date()), "MMMM d', ' yyyy")}</small>
                </footer>
            </div>
        </ContainerPost>
    );
}
