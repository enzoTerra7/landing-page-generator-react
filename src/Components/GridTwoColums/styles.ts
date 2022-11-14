import styled, { css } from 'styled-components'
import { HeadingContainer } from '../Heading/style'

export const Container = styled.div`
    ${({theme}) => css`
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: ${theme.spacings.lg};
        align-items: center;
        justify-content: center;
        grid-auto-flow: row nowrap;

        @media screen and (max-width: 900px){
            grid-template-columns: 1fr;
        }
    `}
`

export const TextContainer = styled.div`
    ${({theme}) => css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5vw;

        @media screen and (max-width: 900px){ 
            justify-content: unset;
            
            *{
                font-size: calc(90%);
            }

            ${HeadingContainer} {
                text-align: center;
                font-size: calc(125%);
            }
        }
    `}
`

export const ImgContainer = styled.div`
    ${({theme}) => css`
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;

            @media screen and (max-width: 900px){
                max-height: 50vh;
            }
        }
    `}
`