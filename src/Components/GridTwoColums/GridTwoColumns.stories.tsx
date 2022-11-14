import { GridTwoColumns, GridTwoColumnsProps } from './index';

import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Grids/GridTwoColumns',
    component: GridTwoColumns,
    args: {
        className: '',
        background: false,
        img: 'https://res.cloudinary.com/dliqm0fou/image/upload/v1620913562/javascript_c26d6d93f0.svg',
        imgAlt: 'Imagem com desenho das liguaguens HTML, CSS e JS',
        title: 'Liguaguens de programação',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus quidem magnam quod voluptas maxime iste voluptatem, vel quae perspiciatis voluptatum at ab id consequuntur officiis atque, minima quaerat sequi?'
    },
    argTypes: {
        className: { type: 'string' },
        img: { type: 'string' },
        imgAlt: { type: 'string' },
        title: { type: 'string' },
        text: { type: 'string' },
        background: { type: 'boolean' },
    },
} as Meta<GridTwoColumnsProps>;

export const WithoutBg: StoryObj<GridTwoColumnsProps> = {};

export const WithBg: StoryObj<GridTwoColumnsProps> = {
    args: {
        background: true,
    }
};