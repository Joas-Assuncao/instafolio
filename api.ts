import axios from 'axios';

const user = 'Joas-Assuncao';

export const getUserAPI = axios.create({
    baseURL: `https://api.github.com/users/${user}`,
    headers:  {
        "Authorization": `token ${process.env.NEXT_PUBLIC_AUTH_KEY}`,
    }
})

export const getRepoAPI = axios.create({
    baseURL: `https://api.github.com/repos/${user}`,
    headers:  {
        "Authorization": `token ${process.env.NEXT_PUBLIC_AUTH_KEY}`,
    }
})