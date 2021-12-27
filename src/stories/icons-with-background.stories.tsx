import { Meta } from '@storybook/react';
import React from 'react';
import SvgEyeClose from '../icons/EyeClose';
import { Icon } from '../components';

export default {
  title: 'Icons/With Background',
  component: Icon,
} as Meta;

const Template = (arg) => (
  <Icon {...arg}>
    <SvgEyeClose width={16} height={16} />
  </Icon>
);

export const WithBackground = Template.bind({});
WithBackground.args = {
  bgColor: 'primary',
  width: 32,
  height: 32
};
