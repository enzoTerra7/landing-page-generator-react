import { Heading, HeadingProps } from './index'

import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Hello World.',
        size: '2rem',
        color: '',
        className: ''
    },
    argTypes: {
        size: {
            options: ['0.875rem', '1rem', '1.125rem', '1.25rem', '1.5rem', '2rem', '2.5rem', '3rem', '3.5rem'],
            control: {
                type: 'select'
            }
        },
        color: {
            type: 'string'
        },
        className: {
            type: 'string',
        },
        weight: {
            type: 'number',
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: '0.875rem'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: '3.5rem'
    }
}

export const CustomChild: StoryObj<HeadingProps> = {
    args: {
        children: <h1>
            Hello World in tag h1
        </h1>
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
}

export const CustomColor: StoryObj<HeadingProps> = {
    args: {
        color: '#6108f1f9'
    }
}