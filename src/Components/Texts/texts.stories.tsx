import { Texts, TextsProps } from './index'

import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Texts',
    component: Texts,
    args: {
        children: 'Hello World.',
        size: '2rem',
        color: '',
        className: '',
        lineHeight: ''
    },
    argTypes: {
        size: {
            options: ['0.875rem', '1rem', '1.125rem', '1.25rem', '1.5rem', '2rem', '2.5rem', '3rem', '3.5rem'],
            control: {
                type: 'select'
            }
        },
        color: {
            type: 'string',
        },
        className: {
            type: 'string',
        },
        lineHeight: {
            type: 'string',
        }
    }
} as Meta<TextsProps>

export const Default: StoryObj<TextsProps> = {}

export const Small: StoryObj<TextsProps> = {
    args: {
        size: '0.875rem'
    }
}

export const Large: StoryObj<TextsProps> = {
    args: {
        size: '1.5rem'
    }
}

export const CustomChild: StoryObj<TextsProps> = {
    args: {
        children: <p>
            Hello World in tag p
        </p>
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
}

export const CustomColor: StoryObj<TextsProps> = {
    args: {
        color: '#6108f1f9'
    }
}