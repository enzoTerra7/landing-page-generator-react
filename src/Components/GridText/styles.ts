import { HeadingContainer } from './../Heading/style';
import { TextsContainer } from './../Texts/style';
import styled, { css } from 'styled-components'

export const TextContainer = styled.div`
    ${({theme}) => css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        ${TextsContainer} {
            margin-bottom: ${theme.spacings.huge};
            @media screen and (max-width: 900px) {
                font-size: calc(95%);
            }
        }

        ${HeadingContainer} {
            text-align: center;
            width: 100%;
            margin-bottom: ${theme.spacings.sm};
            
            @media screen and (max-width: 900px) {
                font-size: calc(130%);
            }
        }
    `}
`

export const GridContainer = styled.div`
    ${({theme}) => css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        counter-reset: grid-counter;
        gap: ${theme.spacings.lg2x}
    `}
`

export const GridElementContainer = styled.div`
    ${({theme}) => css`
        ${TextsContainer} {
            @media screen and (max-width: 900px) {
                font-size: calc(85%);
            }
        }

        ${HeadingContainer} {
            position: relative;
            left: 1.875rem;
            margin-bottom: ${theme.spacings.sm};
            justify-content: flex-start;
            
            @media screen and (max-width: 900px) {
                font-size: calc(105%);
            }
        }

        ${HeadingContainer}::before {
            counter-increment: grid-counter;
            content: counter(grid-counter);
            position: absolute;
            font-size: ${theme.font.sizes.lg2x};
            top: -0.375rem;
            left: -2rem;
            transform: rotate(5deg);
        }
    `}
`