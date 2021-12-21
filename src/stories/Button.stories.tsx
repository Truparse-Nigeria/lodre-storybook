import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { IButton } from '../components/button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Block = Template.bind({});
Block.args = {
    children: 'Primary Button'
}

export const Outline = Template.bind({});
Outline.args = {
    children: 'Outline Button',
    variant: 'outline'
}