import React from 'react'
import { TextSizeProps, Theme } from '../../styles/theme'
import { TextsContainer } from './style'

export interface TextsProps extends TextSizeProps {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
    color?: string
    lineHeight?: string
}

export const Texts = (props: TextsProps) => {
    return (
        <TextsContainer lineHeight={props.lineHeight} size={props.size || Theme.font.sizes.md} color={props.color} className={props.className}>
            {props.children}
        </TextsContainer>
    )
}