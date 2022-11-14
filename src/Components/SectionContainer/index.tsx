import React from 'react'
import * as Styles from './styles'

export interface SectionContainerProps {
    children: React.ReactNode
    className?: string
    background?: boolean
}

export const SectionContainer = (props: SectionContainerProps) => {
    return(
        <Styles.Container background={props.background} className={props.className} >
            {props.children}
        </Styles.Container>
    )
}