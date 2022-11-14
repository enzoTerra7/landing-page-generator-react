import React from 'react'
import { Heading } from '../Heading'
import { SectionContainer } from '../SectionContainer'
import { Texts } from '../Texts'
import * as Styles from './styles'

export interface GridTwoColumnsProps {
    title: string
    text?: string
    img?: string
    imgAlt?: string
    className?: string
    background?: boolean
}

export const GridTwoColumns = (props: GridTwoColumnsProps) => {
    return(
        <SectionContainer
            className={props.className}
            background={props.background}
        >
            <Styles.Container>
                <Styles.TextContainer>
                    <Heading
                        size='2rem'
                        weight={900}
                    >
                        {props.title}
                    </Heading>
                    {props.text && (
                        <Texts
                            lineHeight='1.425rem'
                            size='1.125rem'
                        >
                            {props.text}
                        </Texts>
                    )}
                </Styles.TextContainer>
                {props.img && (
                    <Styles.ImgContainer>
                        <img src={props.img} alt={props.imgAlt || 'imagem de referência da coluna'} />
                    </Styles.ImgContainer>
                )}
            </Styles.Container>
        </SectionContainer>
    )
}