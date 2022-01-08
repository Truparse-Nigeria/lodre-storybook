import { Meta } from '@storybook/react';
import React from 'react';
import { Card, CardBody, Grid } from '../components';

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    gap: { type: 'number', defaultValue: 1 },
  },
} as Meta;

const Template = ({ numberOfChildren, ...args }) => (
  <Grid {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <Card bgColor="grey">
        <CardBody>
        <p>Column {n + 1}</p>
        </CardBody>
      </Card>
    ))}
  </Grid>
);

export const EvenColumn = Template.bind({});
EvenColumn.args = {
  lg: 'repeat(3, 1fr)',
  md: 'repeat(2, 1fr)',
  numberOfChildren: 6,
};

export const RightAside = Template.bind({});
RightAside.args = {
  sm: '2fr 1fr',
  numberOfChildren: 2,
};

export const LeftAside = Template.bind({});
LeftAside.args = {
  sm: '1fr 2fr',
  numberOfChildren: 2,
};

export const centerContent = Template.bind({});
centerContent.args = {
  sm: '1fr 2fr 1fr',
  numberOfChildren: 3,
};
