import type { NextPage } from 'next';

import { Bio } from '../components/Bio';
import { Feed } from '../components/Feed';
import { ContainerMain } from '../styles';

const Home: NextPage = () => {
    return (
        <>
            <ContainerMain>
                <Bio />
                <Feed />
            </ContainerMain>
        </>
    )
}

export default Home;