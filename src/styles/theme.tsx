import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./globals"

export const Theme = {
    colors: {
        white: 'white',
        black: 'black',
        gray50: '#DDD',
        primary: '#0A1128',
        secondary: '#dc143c',
    },

    font: {
        sizes: {
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            xxl: '1.5rem',
            lg2x: '2rem',
            l2x: '2.5rem',
            '2xxl': '3rem',
            huge: '3.5rem'
        }
    },
    spacings: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        xxl: '1.5rem',
        lg2x: '2rem',
        l2x: '2.5rem',
        '2xxl': '3rem',
        huge: '3.5rem'
    }
}

export const ThemeDecorator = (StoryFn: any) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {StoryFn()}
    </ThemeProvider>
)

export interface TextSizeProps {
    size?: '0.875rem' | '1rem' | '1.125rem' | '1.25rem' | '1.5rem' | '2rem' | '2.5rem' | '3rem' | '3.5rem',
}