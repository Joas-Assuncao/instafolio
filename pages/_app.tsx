import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import { GlobalStyles } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
                <link rel="apple-touch-icon" href="/logo192.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Grand+Hotel&family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet" />
                <title>Instafolio</title>
            </Head>
            <Header />
            <Component {...pageProps} />
            <GlobalStyles />
            <Footer />
        </>
    )
}

export default MyApp
