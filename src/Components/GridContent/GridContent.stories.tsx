import { GridContent, GridContentProps } from './index';

import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Grids/GridContent',
    component: GridContent,
    args: {
        className: '',
        background: false,
        title: 'My html example',
        html: '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>'
    },
    argTypes: {
        className: { type: 'string' },
    },
} as Meta<GridContentProps>;

export const WithoutBg: StoryObj<GridContentProps> = {};

export const WithBg: StoryObj<GridContentProps> = {
    args: {
        background: true,
    }
};