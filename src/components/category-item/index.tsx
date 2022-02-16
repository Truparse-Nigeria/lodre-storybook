import React, { ReactChild, useState } from "react";
import { Heading } from "..";
import {
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
      <StyledCategoryItemButton>
        {icon && <StyledCategoryIcon>{icon}</StyledCategoryIcon>} {title}
      </StyledCategoryItemButton>
      <StyledCategoryItemMenu
        onMouseLeave={() => setFocused(false)}
        visible={focused}
      >
        <Heading weight="w700" className="px-10 pt-10">
          {title}
        </Heading>
        <>{children}</>
      </StyledCategoryItemMenu>
    </StyledCategoryItemContainer>
  );
};

export default CategoryItem;
