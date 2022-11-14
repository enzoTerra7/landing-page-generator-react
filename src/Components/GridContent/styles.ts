import { HeadingContainer } from './../Heading/style';
import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({theme}) => css`
        width: 100%;
        max-width: 580px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5vw;
        padding: ${theme.spacings.huge};

        * > * {
            text-align: center;
            margin-bottom: ${theme.spacings.sm}
        }

        @media screen and (max-width: 900px){ 
            justify-content: unset;
            
            div > *{
                font-size: calc(90%);
            }

            ${HeadingContainer} {
                text-align: center;
                font-size: calc(125%);
            }
        }
    `}
`