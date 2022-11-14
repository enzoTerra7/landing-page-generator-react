import styled, { css } from "styled-components";

export const HeadingContainer = styled.div`
    ${({theme}) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        &,
        *{
            font-size: ${(props: {size?: string, color?: string, weight?: number}) => props.size};
            color: ${(props) => props.color ||'inherit'};
            font-weight: ${(props) => props.weight || 'bolder'};
        }
    `}
`