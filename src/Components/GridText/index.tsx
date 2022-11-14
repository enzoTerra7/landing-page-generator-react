import React from 'react'
import { Heading } from '../Heading'
import { SectionContainer } from '../SectionContainer'
import { Texts } from '../Texts'
import * as Styles from './styles'

export interface GridProps {
    title: string,
    text: string
}

export interface GridTextProps {
    title: string
    description: string
    grid: GridProps[]
    className?: string
    background?: boolean
}

export const GridText = (props: GridTextProps) => {
    return(
        <SectionContainer
            className={props.className}
            background={props.background}
        >
            <Styles.TextContainer>
                <Heading
                    size='2rem'
                    weight={900}
                >
                    {props.title}
                </Heading>
                <Texts
                    lineHeight='1.425rem'
                    size='1.125rem'
                >
                    {props.description}
                </Texts>
            </Styles.TextContainer>
            <Styles.GridContainer>
                {props.grid.map((grid, index) => (
                    <Styles.GridElementContainer key={index}>
                        <Heading
                            size='1.5rem'
                            weight={900}
                        >
                            {grid.title}
                        </Heading>
                        <Texts
                            lineHeight='1.25rem'
                            size='1rem'
                        >
                            {grid.text}
                        </Texts>
                    </Styles.GridElementContainer>
                ))}
            </Styles.GridContainer>
        </SectionContainer>
    )
}