import React, { useState } from "react";
import { Card } from "..";
import {
  StyledCategory,
  StyledCategoryItemButton,
  StyledCategoryItemContainer,
  StyledCategoryItemMenu,
} from "./styled";

interface CategoryItemProps {
  title: string;
  children:
    | React.ReactElement
    | React.ReactElement[]
    | React.ReactChild
    | React.ReactChild[];
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, children }) => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <StyledCategoryItemContainer
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
    >
      <StyledCategory>
        <StyledCategoryItemButton>{title}</StyledCategoryItemButton>
        <StyledCategoryItemMenu
          onMouseLeave={() => setFocused(false)}
          visible={focused}
        >
          <Card>
            <>{children}</>
          </Card>
        </StyledCategoryItemMenu>
      </StyledCategory>
    </StyledCategoryItemContainer>
  );
};

export default CategoryItem;
