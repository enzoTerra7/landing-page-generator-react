import styled, { css } from 'styled-components'

export const Container = styled.nav`
    ${({theme}) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        flex-flow: row wrap;

        @media screen and (max-width: 900px){
            flex-flow: column wrap;
            flex-direction: column;
        }
    `}
`