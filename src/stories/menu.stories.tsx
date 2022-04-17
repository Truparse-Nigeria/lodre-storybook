import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Menu } from '../components';
import { IMenu } from '../components/menu';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

const Template: Story<IMenu> = (args) => (
  <Menu {...args}>
    <ul>
      <li>
        <a href="#">Messages</a>
      </li>
      <li>
        <a href="#">Trips</a>
      </li>
      <li>
        <a href="#">Saved</a>
      </li>
    </ul>
  </Menu>
);

export const MenuDropdown = Template.bind({});
