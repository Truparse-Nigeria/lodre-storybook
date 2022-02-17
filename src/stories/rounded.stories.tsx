import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Card, CardBody, Rounded } from '../components';
import { IRounded } from '../components/rounded';

export default {
  title: 'Components/Rounded',
  component: Rounded,
} as Meta;

const Template: Story<IRounded> = (args) => (
  <Rounded {...args}>
    <Card bgColor="ash">
      <CardBody>Do any thing in body</CardBody>
    </Card>
  </Rounded>
);

export const DefaultRounded = Template.bind({});
DefaultRounded.args = {
  borderRadius: 'default',
};
