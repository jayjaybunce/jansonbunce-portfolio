import React, { useState, useEffect, createContext, useContext } from 'react'
import App from 'next/app'
import { ThemeProvider } from '@chakra-ui/core'
import customTheme from '../theme'
import NavBar from '../components/NavBar/NavBar'
import { Global, css } from '@emotion/core'
import { getUserFromToken } from '../utils/tokenService'
import { UserProvider, UserContext, UserDispatchContext } from '../providers/UserProvider'

MyApp.getInitialProps = async (UserContext) => {
    const appProps = await App.getInitialProps(UserContext)
    return { appProps }
}

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={customTheme}>
            <UserProvider>
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
            </UserProvider>
        </ThemeProvider>
    )
}


export default MyApp
