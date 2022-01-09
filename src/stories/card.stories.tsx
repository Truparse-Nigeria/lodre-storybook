import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  Card,
  Col,
  Container,
  Flex,
  Grid,
  Paragraph,
  SmallText,
  ProductCard,
  CardBody,
} from '../components';
import {
  ICard,
  IProductCard,
  ISideProductCard,
  SideProductCard,
} from '../components/card';
import { PALETTE } from '../tokens/color';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    bgColor: {
      options: Object.keys(PALETTE),
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<ICard> = (args) => <Card {...args}>
  <CardBody>
    Do any thing in body
  </CardBody>
</Card>;

const ProductTemplate: Story<IProductCard> = (args) => (
  <Container>
    <Grid md="repeat(2, 1fr)" lg="repeat(3, 1fr)">
      {[...Array(3).fill(0)].map((n) => (
        <ProductCard {...args}>
          <Paragraph weight="w600" ellipsis={2}>
            Nylon stretch lace garment accessories wide elastic lace for
            underwear and bra stretch lace fabric
          </Paragraph>
          <SmallText>100 Pieces (MOQ)</SmallText>
          <Flex gap={0.4}>
            <Col>
              <Paragraph weight="w700" size="pLarge">
                ₦60,000
              </Paragraph>
            </Col>
            <Col>
              <SmallText>
                <s>₦60,000</s>
              </SmallText>
            </Col>
          </Flex>
        </ProductCard>
      ))}
    </Grid>
  </Container>
);

const SideProductTemplate: Story<ISideProductCard> = (args) => (
  <Container>
    <Grid md="repeat(2, 1fr)" lg="repeat(3, 1fr)">
      {[...Array(3).fill(0)].map((n) => (
        <SideProductCard {...args}>
          <Paragraph weight="w600" ellipsis={2}>
            Nylon stretch lace garment accessories wide elastic lace
          </Paragraph>
          <SmallText className="mt-10">100 Pieces (MOQ)</SmallText>
          <Flex gap={0.4}>
            <Col>
              <Paragraph weight="w700" size="pLarge">
                ₦60,000
              </Paragraph>
            </Col>
            <Col>
              <SmallText>
                <s>₦60,000</s>
              </SmallText>
            </Col>
          </Flex>
        </SideProductCard>
      ))}
    </Grid>
  </Container>
);

export const BasicCard = Template.bind({});
BasicCard.args = {
  children: 'Basic Card',
  bgColor: 'grey',
  border: false,
};

export const ProductCardGrid = ProductTemplate.bind({});
ProductCardGrid.args = {
  src: 'https://picsum.photos/800',
  bgColor: 'grey',
};

export const SideProductCardGrid = SideProductTemplate.bind({});
SideProductCardGrid.args = {
  src: 'https://picsum.photos/800',
  bgColor: 'grey',
};
