import styled, { css } from 'styled-components'

interface ContainerProps {
    background?: boolean;
    className?: string;
}

const changeBackground = (theme: any) => css`
    background-color: ${theme.colors.primary};
    &, *{
        color: ${theme.colors.white};
    }
`;

export const Container = styled.div<ContainerProps>`
    ${({theme, background}) => css`
        max-width: 100rem;
        margin: 0 auto;
        padding: ${theme.spacings.xxl};
        height: 100vh;

        background-color: ${theme.colors.white};
        &, *{
            color: ${theme.colors.primary}
        }
        ${background && changeBackground(theme)}
    `}
`