import React from 'react'
import { TextSizeProps, Theme } from '../../styles/theme'
import { HeadingContainer } from './style'

export interface HeadingProps extends TextSizeProps {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
    color?: string
    weight?: number
}

export const Heading = (props: HeadingProps) => {
    return (
        <HeadingContainer size={props.size || Theme.font.sizes.lg} weight={props.weight} color={props.color} className={props.className}>
            {props.children}
        </HeadingContainer>
    )
}