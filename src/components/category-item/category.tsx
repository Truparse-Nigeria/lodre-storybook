import React from "react";
import { StyledCategoryContainer } from "./styled";

interface CategoryContainerProps {
  children:
    | React.ReactElement
    | React.ReactElement[]
    | React.ReactChild
    | React.ReactChild[];
}

const CategoryContainer: React.FC<CategoryContainerProps> = ({ children }) => {
  return <StyledCategoryContainer>{children}</StyledCategoryContainer>;
};

export default CategoryContainer;
