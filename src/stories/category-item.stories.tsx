import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CategoryItem, Flex, Paragraph } from "../components";
import { Help } from "../icons";
import { StyledCategoryContainer } from "../components/category-item/styled";

export default {
  title: "Components/Category Item",
  component: CategoryItem,
} as ComponentMeta<typeof CategoryItem>;

const Template: ComponentStory<typeof CategoryItem> = (args) => (
  <StyledCategoryContainer>
    <CategoryItem {...args} />
  </StyledCategoryContainer>
);

export const NormalCategoryItem = Template.bind({});
NormalCategoryItem.args = {
  title: "Attire & Clothing",
  icon: <Help width={24} height={24} />,
  children: (
    <Flex className="px-10 py-10">
      <div>
        <Paragraph className="my-5" weight="w500" size="small">
          Baby Clothing
        </Paragraph>
        <Paragraph className="my-5" weight="w500" size="small">
          Men's Clothing
        </Paragraph>
        <Paragraph className="my-5" weight="w500" size="small">
          Women's Clothing
        </Paragraph>
        <Paragraph className="my-5" weight="w500" size="small">
          African Clothing
        </Paragraph>
      </div>
      <div>
        <Paragraph className="my-5" weight="w500" size="small">
          Baby Clothing
        </Paragraph>
        <Paragraph className="my-5" weight="w500" size="small">
          Men's Clothing
        </Paragraph>
        <Paragraph className="my-5" weight="w500" size="small">
          Women's Clothing
        </Paragraph>
        <Paragraph className="my-5" weight="w500" size="small">
          African Clothing
        </Paragraph>
      </div>
    </Flex>
  ),
};
