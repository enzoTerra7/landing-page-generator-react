import { LogoLink, LogoLinkProps } from './index';

import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Menu/LogoLink',
    component: LogoLink,
    args: {
        className: '',
        alt:'',
        image:'',
        logoText: 'Logo',
        url: '#'
    },
    argTypes: {
        className: { type: 'string' },
        alt: { type: 'string' },
        image: { type: 'string' },
        logoText: { type: 'string' },
    },
} as Meta<LogoLinkProps>;

export const WithoutImage: StoryObj<LogoLinkProps> = {};

export const WithImage: StoryObj<LogoLinkProps> = {
    args: {
        image: 'https://res.cloudinary.com/dliqm0fou/image/upload/v1621002226/landing_page_2_d57b885a3d.svg',
        alt: 'My Logo'
    }
};