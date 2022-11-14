import React, { useState } from 'react'
import { LogoLink, LogoLinkProps } from '../LogoLink'
import { LinkPropsNavLink, NavLinks } from '../NavLinks'
import { SectionContainer } from '../SectionContainer'
import * as Styles from './styles'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

export interface MenuComponentProps {
    links: LinkPropsNavLink[]
    logo: LogoLinkProps
    className?: string
    navClassName?: string
}

export const MenuComponent = (props: MenuComponentProps) => {

    const [visible, setVisible] = useState(false)

    return(
        <Styles.Container visible={visible} className={props.className} >
            <SectionContainer>
                <Styles.MenuContainer onClick={() => setVisible(false)}>
                    <LogoLink 
                        {...props.logo}
                    />
                    <NavLinks
                        className={props.navClassName}
                        links={props.links}
                    />
                </Styles.MenuContainer>
            </SectionContainer>
            <Styles.Button onClick={() => setVisible(e => !e)} aria-label="Abrir/Fechar menu" title="Abrir ou fechar o menu">
                {visible ? <CloseIcon aria-label="Fechar menu" /> : <MenuIcon aria-label="Abrir menu" />}
            </Styles.Button>
        </Styles.Container>
    )
}