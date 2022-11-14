import { MenuLink, MenuLinkProps } from './index';

import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Menu/MenuLink',
    component: MenuLink,
    args: {
        className: '',
        href: 'https://www.google.com/',
        children: 'Ir para google',
        openInNewPage: true,
    },
    argTypes: {
        className: { type: 'string' },
        href: { type: 'string' },
        children: { type: 'string' },
        openInNewPage: { type: 'boolean' }
    },
} as Meta<MenuLinkProps>;

export const WithoutFlexContainer: StoryObj<MenuLinkProps> = {}

export const WithFlexContainer = (args: MenuLinkProps) => {
    return (
        <div style={{ display: 'flex' }}>
            <MenuLink {...args} />
        </div>
    );
};
