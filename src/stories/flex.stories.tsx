import { Meta } from '@storybook/react';
import React from 'react';
import { Flex, Col, Card, CardBody } from '../components';

export default {
  title: 'Layout/Flex',
  component: Flex,
} as Meta;

export const BasicFlex = () => (
  <Flex justifyContent="center">
    <Col>
      <Card bgColor="grey">
        <CardBody>Card</CardBody>
      </Card>
    </Col>
    <Col>
      <Card bgColor="grey">
        <CardBody>Card2</CardBody>
      </Card>
    </Col>
  </Flex>
);
