import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  Card,
  Col,
  Container,
  Flex,
  Navbar,
  Paragraph,
  SearchInput,
} from '../components';
import SvgEyeClose from '../icons/EyeClose';
import SvgCart from '../icons/Cart';
import SvgHelp from '../icons/Help';
import SvgUser from '../icons/User';

export default {
  title: 'Layout/Nav bar',
  component: Navbar,
} as Meta;

const Template: Story = (args) => (
  <Navbar {...args}>
    <Container className="my-30">
    <Card bgColor="grey">Basic Card</Card>
    </Container>
  </Navbar>
);

export const Main = Template.bind({});

const Nav = () => (
  <Flex gap={2}>
    <Col>
      <Flex gap={0.5} alignItems="center">
        <Col>
          <SvgCart width="20" height="20" />
        </Col>
        <Col>
          <Paragraph weight="w600">Cart</Paragraph>
        </Col>
      </Flex>
    </Col>
    <Col>
      <Flex gap={0.5} alignItems="center">
        <Col>
          <SvgUser width="20" height="20" />
        </Col>
        <Col>
          <Paragraph weight="w600">My Account</Paragraph>
        </Col>
      </Flex>
    </Col>
    <Col>
      <Flex gap={0.5} alignItems="center">
        <Col>
          <SvgHelp width="20" height="20" />
        </Col>
        <Col>
          <Paragraph weight="w600">Help</Paragraph>
        </Col>
      </Flex>
    </Col>
  </Flex>
);

const BottomNav = () => (
  <Container>
    <Flex justifyContent="space-between">
      <Col size={1} align="center">
        <SvgUser width={20} height={20} />
        <Paragraph size="xSmall" weight="w600">
          Account
        </Paragraph>
      </Col>
      <Col size={1} align="center">
        <SvgUser width={20} height={20} />
        <Paragraph size="xSmall" weight="w600">
          Account
        </Paragraph>
      </Col>
      <Col size={1} align="center">
        <SvgCart width={20} height={20} />
        <Paragraph size="xSmall" weight="w600">
          My Cart
        </Paragraph>
      </Col>
      <Col size={1} align="center">
        <SvgHelp width={20} height={20} />
        <Paragraph size="xSmall" weight="w600">
          Help
        </Paragraph>
      </Col>
      <Col size={1} align="center">
        <SvgUser width={20} height={20} />
        <Paragraph size="xSmall" weight="w600">
          Account
        </Paragraph>
      </Col>
    </Flex>
  </Container>
);

Main.args = {
  logo: <SvgEyeClose />,
  search: <SearchInput type="text" placeholder="Search for anything..." />,
  nav: <Nav />,
  bottomNav: <BottomNav />,
};
