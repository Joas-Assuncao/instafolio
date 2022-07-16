export interface IUserGithub {
    avatar_url: string;
    login: string;
    public_repos: number;
    followers: number;
    following: number;
    bio: string;
    location: string;
}

export interface IRepoGithub {
    id: number;
    name: string;
    private: boolean;
    owner: IOwner;
    html_url: string;
    description: string;
    created_at: Date;
    stargazers_count: number;
    language: string;
    topics: any[];
    archived: boolean;
}

export interface IOwner {
    login: string;
    avatar_url: string;
    html_url: string;
}