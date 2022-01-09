import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Container, Flex, Col, Card, CardBody } from '../components';
import { IContainer } from '../components/container';

export default {
  title: 'Layout/Container',
  component: Container,
} as Meta;

const Template: Story<IContainer> = (args) => (
  <Container {...args}>
    <Flex justifyContent="center">
      <Col size={1}>
        <Card bgColor="grey">
          <CardBody>
            test
          </CardBody>
        </Card>
      </Col>
      <Col size={1}>
        <Card bgColor="grey">
          <CardBody>
            test 2
          </CardBody>
        </Card>
      </Col>
    </Flex>
  </Container>
);

export const Default = Template.bind({});

export const Fluid = Template.bind({});
Fluid.args = {
    fluid: true
}