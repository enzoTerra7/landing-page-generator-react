import { SectionContainer, SectionContainerProps } from './index';

import { Meta, StoryObj } from '@storybook/react'
import { Heading } from '../Heading';
import { Texts } from '../Texts';

export default {
    title: 'Components/SectionContainer',
    component: SectionContainer,
    args: {
        className: '',
        children: [
            <Heading size='2.5rem' weight={900}>
                <h2>
                    Titulo da seção
                </h2>
            </Heading>,
            <Texts size='1.125rem' lineHeight='1.375rem'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odit neque aperiam sapiente error quibusdam quis, reiciendis, sed quia eius sequi facere nobis quo accusamus minima non dignissimos cupiditate. Rem!
            </Texts>
        ],
        background: false
    },
    argTypes: {
        className: { type: 'string' },
        background: {type: 'boolean'}
    },
} as Meta<SectionContainerProps>;

export const WithoutBg: StoryObj<SectionContainerProps> = {};

export const WithBg: StoryObj<SectionContainerProps> = {
    args: {
        background: true
    }
};