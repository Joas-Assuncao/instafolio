import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <GlobalStyles />
        </>
    )
}

export default MyApp
