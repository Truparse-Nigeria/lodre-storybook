import React from 'react';
import { Col, Container, Flex, Grid, Paragraph } from '..';
import SvgCart from '../../icons/Cart';
import SvgHelp from '../../icons/Help';
import SvgSearch from '../../icons/Search';
import SvgUser from '../../icons/User';
import {
  StyledGrid,
  StyledNavbar,
  StyledSearchButton,
  StyledSearchInput,
} from './styled';

const Navbar = () => {
  return (
    <div>
      <StyledNavbar>
        <Container>
          <StyledGrid>
            <div>logo</div>
            <Flex gap={0}>
              <StyledSearchInput
                type="text"
                placeholder="Search for anything..."
              />
              <StyledSearchButton>
                <SvgSearch width="20" height="20" />
              </StyledSearchButton>
            </Flex>
            <div>
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
            </div>
          </StyledGrid>
        </Container>
      </StyledNavbar>
      {/* {children} */}
      <div>
        <Container>
          <Flex justifyContent="space-between">

            <Col size={1}>
            <SvgUser width={20} height={20} />
              <Paragraph size="xSmall" weight="w600">
                Account
              </Paragraph>
            </Col>
            <Col size={1}>
            <SvgUser width={20} height={20} />
              <Paragraph size="xSmall" weight="w600">
                Account
              </Paragraph>
            </Col>
            <Col size={1}>
            <SvgCart width={20} height={20} />
              <Paragraph size="xSmall" weight="w600">
                My Cart
              </Paragraph>
            </Col>
            <Col size={1}>
            <SvgHelp width={20} height={20} />
              <Paragraph size="xSmall" weight="w600">
                Help
              </Paragraph>
            </Col>
            <Col size={1}>
              <SvgUser width={20} height={20} />
              <Paragraph size="xSmall" weight="w600">
                Account
              </Paragraph>
            </Col>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
