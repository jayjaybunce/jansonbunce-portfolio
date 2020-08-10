import React from 'react'
import App from 'next/app'
import { ThemeProvider } from '@chakra-ui/core'
import customTheme from '../theme'
import NavBar from '../components/NavBar/NavBar'
import { Global, css } from '@emotion/core'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={customTheme}>
            <Global
                styles={css`
                    @font-face {
                        font-family: 'Roboto';
                        src: url('/fonts/Roboto/Roboto-Thin.ttf')
                    }
                    @font-face {
                        font-family: 'Montserrat';
                        src: url('/fonts/Montserrat/Montserrat-SemiBold.ttf')

                    }
                `}
            />
            <style jsx global>{`
                body {
                    padding: 0;
                    margin: 0;
                    background-color: ${customTheme.brand.canvas};
                }
            `}</style>
            <NavBar />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
}

export default MyApp
