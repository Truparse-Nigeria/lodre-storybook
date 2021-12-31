import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Navbar } from '../components';

export default {
  title: 'Layout/Nav bar',
  component: Navbar,
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const Main = Template.bind({});
