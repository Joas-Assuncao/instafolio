export interface IUserGithub {
    avatar_url: string;
    bio: string;
    followers: number;
    following: number;
    html_url: string;
    login: string;
    location: string;
    public_repos: number;
}

export interface IRepoGithub {
    id: number;
    name: string;
    private: boolean;
    html_url: string;
    description: string;
    created_at: Date;
    stargazers_count: number;
    language: string;
    topics: any[];
    archived: boolean;
}