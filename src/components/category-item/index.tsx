import React, { ReactChild, useState } from "react";
import {
  StyledCategory,
  StyledCategoryIcon,
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
  icon?: JSX.Element | SVGElement | ReactChild;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  icon,
  children,
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <StyledCategoryItemContainer
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
    >
      <StyledCategory>
        <StyledCategoryItemButton>
          {icon && <StyledCategoryIcon>{icon}</StyledCategoryIcon>} {title}
        </StyledCategoryItemButton>
        <StyledCategoryItemMenu
          onMouseLeave={() => setFocused(false)}
          visible={focused}
        >
          <>{children}</>
        </StyledCategoryItemMenu>
      </StyledCategory>
    </StyledCategoryItemContainer>
  );
};

export default CategoryItem;
