import axios from 'axios';

const user = 'joas-assuncao';

export const apiForPersonalInfo = axios.create({
    baseURL: `https://api.github.com/users/${user}`,
})

export const apiForRepos = axios.create({
    baseURL: `https://api.github.com/users/${user}/repos`,
})