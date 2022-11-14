import styled, { css } from "styled-components";

export const TextsContainer = styled.div`
    ${({theme}) => css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &,
        *,
        * > *{
            font-size: ${(props: {size?: string, color?: string, lineHeight?: string}) => props.size};
            color: ${(props) => props.color || 'inherit'};
            line-height: ${(props) => props.lineHeight || 'unset'};
        }
    `}
`