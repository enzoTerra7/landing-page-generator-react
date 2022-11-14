import React from 'react'
import { Heading } from '../Heading'
import { SectionContainer } from '../SectionContainer'
import { Texts } from '../Texts'
import * as Styles from './styles'

export interface GridContentProps {
    title: string
    html?: string
    className?: string
    background?: boolean
}

export const GridContent = (props: GridContentProps) => {
    return(
        <SectionContainer
            className={props.className}
            background={props.background}
        >
            <Styles.Container>
                <Heading
                    size='2rem'
                    weight={900}
                >
                    {props.title}
                </Heading>
                {props.html && (
                    <Texts
                        lineHeight='1.425rem'
                        size='1.125rem'
                    >
                        <div dangerouslySetInnerHTML={{__html: props.html}} />
                    </Texts>
                )}
            </Styles.Container>
        </SectionContainer>
    )
}