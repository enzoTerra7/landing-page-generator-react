import styled, { css } from 'styled-components'

export const Container = styled.a`
    ${({theme}) => css`
        text-decoration: none;
        font-weight: bolder;
        display: flex;
        align-items: center;
        
        img {
            max-height: 2.2rem;
        }
    `}
`