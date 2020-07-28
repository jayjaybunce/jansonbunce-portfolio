import React from 'react'
import { ThemeProvider } from '@chakra-ui/core'
import customTheme from '../theme'
import NavBar from '../components/NavBar/NavBar'

export default function App (){
    return (
    <ThemeProvider theme={ customTheme }>
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

