import { GridText, GridTextProps } from './index';

import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Grids/GridText',
    component: GridText,
    args: {
        className: '',
        background: false,
        title: 'My grid text',
        description: 'My grid text example',
        grid: [
            {
                title: 'Grid 1',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem odit cupiditate autem, corrupti facilis.'
            },
            {
                title: 'Grid 2',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem odit cupiditate autem, corrupti facilis.'
            },
            {
                title: 'Grid 3',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem odit cupiditate autem, corrupti facilis.'
            }
        ]
    },
    argTypes: {
        className: { type: 'string' },
        title: { type: 'string' },
        description: { type: 'string' },
        background: { type: 'boolean' },
    },
} as Meta<GridTextProps>;

export const WithoutBg: StoryObj<GridTextProps> = {};

export const WithBg: StoryObj<GridTextProps> = {
    args: {
        background: true,
    }
};