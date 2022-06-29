import type { NextPage } from 'next'
import Head from 'next/head'
import { Bio } from '../components/Bio';

import { Header } from '../components/Header';
import { ContainerMain } from '../styles';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Grand+Hotel&display=swap" rel="stylesheet" />
                <title>Instafolio</title>
            </Head>
            <Header />
            <ContainerMain>
                <Bio />
            </ContainerMain>
        </>
    )
}

export default Home;