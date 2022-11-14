import React from 'react'
import * as Styles from './styles'

export interface MenuLinkProps {
    children: React.ReactNode
    href: string
    className?: string
    openInNewPage?: boolean
}

export const MenuLink = (props: MenuLinkProps) => {
    const target = props.openInNewPage ? '_blank' : '_self'
    return(
        <Styles.Container className={props.className} >
            <a href={props.href} target={target}>
                {props.children}
            </a>
        </Styles.Container>
    )
}