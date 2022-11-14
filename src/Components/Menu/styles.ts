import styled, { css } from 'styled-components'
import { Container as SectionContainer } from '../SectionContainer/styles'
import { HeadingContainer } from '../Heading/style'

//interface de propriedades do Container principal
interface ContainerProps {
    visible?: boolean;
    className?: string;
}

//função de lógica quando o menu for collapsed
const menuVisibleController = () => css`
    visibility: visible;
    opacity: 1;
`

//Container geral do menu
export const Container = styled.div<ContainerProps>`
    ${({theme, visible}) => css`
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        right: 0;
        bottom : 0;
        border-bottom: 1px solid ${theme.colors.gray50};
        background: ${theme.colors.white};

        & ${SectionContainer} {
            padding-top: 0;
            padding-bottom: 0;
        }

        @media screen and (max-width: 900px){
            height: 100vh;

            & ${SectionContainer} {
                height: 100vh;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                overflow-y: auto;
                visibility: hidden;
                opacity: 0;

                transition: all 0.3s ease-in-out;

                ${visible && menuVisibleController()}
            }

            & ${HeadingContainer} {
                padding-bottom: ${theme.spacings.lg2x}
            }
        }
    `}
`

//Container das informações do Menu
export const MenuContainer = styled.div`
    ${({theme}) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        @media screen and (max-width: 900px){
            flex-direction: column;
            justify-content: center;
            width: 100%;
            padding: ${theme.spacings.lg2x} 0;
        }
    `}
`

//Botão do menu collapsado
export const Button = styled.button`
    ${({theme}) => css`
        display: none;
        cursor: pointer;

        @media screen and (max-width: 900px){
            display: block;
            position: fixed;
            z-index: 11;
            top: 10px;
            right: 10px;
            padding: 0.275rem 0.575rem;
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
            border: none;
            border-radius: 4px;

            & svg {
                height: ${theme.font.sizes.xxl};
                width: ${theme.font.sizes.xxl};
            }
        }
    `}
`
