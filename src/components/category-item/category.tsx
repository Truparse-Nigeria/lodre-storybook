import React, { ReactChild, ReactElement } from "react";
import { StyledCategory, StyledCategoryContainer } from "./styled";

interface CategoryProps {
  children: ReactElement | ReactElement[] | ReactChild | ReactChild[];
}

const Category: React.FC<CategoryProps> = ({ children }) => {
  return (
    <StyledCategory>
      <StyledCategoryContainer>{children}</StyledCategoryContainer>
    </StyledCategory>
  );
};

export default Category;
