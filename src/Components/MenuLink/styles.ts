import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({theme}) => css`
        padding: ${theme.spacings.sm} ${theme.spacings.lg};
        position: relative;

        &::after{
            content: '';
            position: absolute;
            bottom: 0.5rem;
            width: 0%;
            height: 2px;
            left: 50%;
            background-color: ${theme.colors.secondary};
            transition: all 0.3s ease-in-out;
        }

        &:hover::after{
            left: 25%;
            width: 50%;
        }

        *{
            text-decoration: none;
            color: ${theme.colors.primary};
            font-size: ${theme.font.sizes.lg};
            text-transform: uppercase;
            font-weight: bolder;
        }
    `}
`