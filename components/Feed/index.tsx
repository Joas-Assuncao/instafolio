import { useEffect, useState } from "react";

import { apiGithub } from "../../api";
import { IRepoGithub } from "../../interfaces";

import { PostsIcon } from "../../public/posts";
import { Card } from "../Card";

import { ContainerFeed } from "./styles";

export function Feed() {
    const [repos, setRepos] = useState<IRepoGithub[]>([]);
    const [error, setError] = useState<Boolean>(false);

    useEffect(() => {
        apiGithub.get('/repos')
            .then(response => response.data)
            .then((dataRepoUser: IRepoGithub[]) => {
                const reposFiltered = dataRepoUser.filter((repo: IRepoGithub) => !repo.archived);
                const reposWithDataFormat = reposFiltered.map((repo: IRepoGithub) => ({...repo, created_at: new Date(repo.created_at)}))
                const reposFormat = reposWithDataFormat.sort((repoA, repoB) => {
                    return repoB.created_at.getTime() - repoA.created_at.getTime()
                })

                setRepos(reposFormat);
            })
            .catch(err => {
                console.error(err);
                setError(true);
            });
    }, []);

    // console.log({repos});

    if(error) {
        return <h1>Algo deu errado nos dados!</h1>
    }

    return (
        <ContainerFeed>
            <div className="navigation">
                <PostsIcon />
                <span>Posts</span>
            </div>
            <div className="cards">
                {repos.map((repo: IRepoGithub) => <Card nameRepo={repo.name} key={repo.id} /> )}
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </ContainerFeed>
    )
}