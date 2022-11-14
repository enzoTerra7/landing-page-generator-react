import { MenuComponent, MenuComponentProps } from './index';

import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Menu/MenuComponent',
    component: MenuComponent,
    args: {
        className: '',
        links: [
            {
                label: 'Link01',
                url: 'link01',
                openInNewPage: true
            },
            {
                label: 'Link02',
                url: 'link02',
                openInNewPage: true
            },
            {
                label: 'Link03',
                url: 'link03',
                openInNewPage: true
            },
            {
                label: 'Link04',
                url: 'link04',
                openInNewPage: true
            }
        ],
        logo: {
            logoText: 'LOGO',
            url: '#',
            alt: 'Logo do Sistema',
            className: '',
            image: ''
        },
        navClassName: ''
    },
    argTypes: {
        className: { type: 'string' },
        navClassName: { type: 'string' }
    },
} as Meta<MenuComponentProps>;

export const Default: StoryObj<MenuComponentProps> = {};