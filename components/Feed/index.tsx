import { Card } from "../Card";
import { PostsIcon } from "../../public/posts";


import { ContainerFeed } from "./styles";
import { useEffect, useState } from "react";
import { apiForRepos } from "../../api";


export function Feed() {
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        apiForRepos.get('')
            .then(response => response.data)
            .then(dataRepoUser => {
                const reposFiltered = dataRepoUser.filter((repo: any) => !repo.archived);
                setRepos(reposFiltered);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <ContainerFeed>
            <div className="navigation">
                <PostsIcon />
                <span>Posts</span>
            </div>
            <div className="cards">
                {repos.map((repo: any) => <Card nameRepo={repo.name} key={repo.id} /> )}
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