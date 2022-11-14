import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body{
        width: 100%;
        height: 100%;
        font-family: 'Open Sans', sans-serif;
    }

    h1, h2, h3, h4{
        font-family: 'Montserrat', sans-serif;
    }

    .text-normal{
        text-transform: unset;
        text-decoration: unset;
    }
`