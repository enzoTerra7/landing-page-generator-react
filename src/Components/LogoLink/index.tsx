import React from 'react'
import { Heading } from '../Heading'
import * as Styles from './styles'

export interface LogoLinkProps {
    logoText: string
    url: string
    className?: string
    image?: string
    alt?: string
}

export const LogoLink = (props: LogoLinkProps) => {
    return(
        <Styles.Container href={props.url} className={props.className} >
            {props.image ? (
                <img src={props.image} alt={props.alt} /> 
            ) : (
                <Heading size='2rem' weight={900}>
                    <h1>
                        {props.logoText}
                    </h1>
                </Heading>
            )}
        </Styles.Container>
    )
}