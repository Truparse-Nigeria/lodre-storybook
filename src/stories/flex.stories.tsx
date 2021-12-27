import { Meta } from '@storybook/react';
import React from 'react';
import { Flex, Col, Card } from '../components';

export default {
  title: 'Layout/Flex',
  component: Flex,
} as Meta;

export const BasicFlex = () => (
  <Flex justifyContent="center">
    <Col>
      <Card bgColor="grey">test</Card>
    </Col>
    <Col>
      <Card bgColor="grey">test 2</Card>
    </Col>
  </Flex>
);
