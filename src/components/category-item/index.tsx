import React, {
  FC,
  HTMLAttributes,
  ReactChild,
  ReactElement,
  useState,
} from "react";
import { Flex } from "..";
import { CaretRight } from "../../icons";
import {
  StyledCategoryIcon,
  StyledCategoryItemButton,
  StyledCategoryItemContainer,
  StyledCategoryItemMenu,
} from "./styled";

export interface CategoryItemProps {
  title: string;
  children: ReactElement | ReactElement[] | ReactChild | ReactChild[];
  icon?: JSX.Element | SVGElement | ReactChild;
}

const CategoryItem: FC<CategoryItemProps & HTMLAttributes<HTMLDivElement>> = ({
  title,
  icon,
  children,
  ...props
}) => {
  const [visibility, setVisibility] = useState<boolean>(false);
  return (
    <StyledCategoryItemContainer
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
      <StyledCategoryItemButton>
        <Flex alignItems="center">
          <>
            {icon && <StyledCategoryIcon>{icon}</StyledCategoryIcon>}
            {title}
          </>
        </Flex>
        <CaretRight width={20} height={20} />
      </StyledCategoryItemButton>
      <StyledCategoryItemMenu
        onMouseLeave={() => setVisibility(false)}
        visible={visibility}
        {...props}
      >
        {children}
      </StyledCategoryItemMenu>
    </StyledCategoryItemContainer>
  );
};

export default CategoryItem;
