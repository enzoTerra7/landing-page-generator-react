import React from 'react'
import { MenuLink } from '../MenuLink'
import * as Styles from './styles'

export type LinkPropsNavLink = {
    url: string,
    label: string,
    openInNewPage?: boolean
}

export interface NavLinksProps {
    links: LinkPropsNavLink[]
    className?: string
}

export const NavLinks = (props: NavLinksProps) => {
    return(
        <Styles.Container className={props.className} >
            {props.links.map((link, index) => (
                <MenuLink 
                    href={link.url} 
                    openInNewPage={link.openInNewPage}
                    key={index}
                >
                    {link.label}
                </MenuLink>
            ))}
        </Styles.Container>
    )
}