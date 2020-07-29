import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from '../theme'
import NavBar from '../components/NavBar/NavBar'
import { Global, css } from '@emotion/core' 

export default function App (){
    return (
    <ThemeProvider theme={ customTheme }>
        <Global
            styles={css`
                @font-face {
                    font-family: 'Roboto';
                    src: url('/fonts/Roboto/Roboto-Thin.ttf');
                    
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
        <NavBar/>
    </ThemeProvider>
    )
}

