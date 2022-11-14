import { NavLinks, NavLinksProps } from './index';

import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Menu/NavLinks',
    component: NavLinks,
    args: {
        className: '',
        links: [
            {
                label: 'Link1',
                url: 'link1',
                openInNewPage: true
            },
            {
                label: 'Link2',
                url: 'link2',
                openInNewPage: true
            },
            {
                label: 'Link3',
                url: 'link3',
                openInNewPage: true
            },
            {
                label: 'Link4',
                url: 'link4',
                openInNewPage: true
            }
        ]
    },
    argTypes: {
        className: { type: 'string' }
    },
} as Meta<NavLinksProps>;

export const Default: StoryObj<NavLinksProps> = {};