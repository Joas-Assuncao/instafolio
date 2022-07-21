import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { getUserAPI } from "../api";
import { IUserGithub } from "../interfaces";

export const DataUserContext = createContext<IUserGithub | null>(null);

export function DataUserProvider({ children }: PropsWithChildren) {
    const [userGithubData, setUserGithubData] = useState<IUserGithub | null>(null);

    useEffect(() => {
        getUserAPI.get('')
            .then(response => response.data)
            .then(dataUserGithub => setUserGithubData(dataUserGithub))
            .catch(err => console.error(err));
    }, []);

    return (
        <DataUserContext.Provider value={userGithubData}>
            {children}
        </DataUserContext.Provider>
    )
}