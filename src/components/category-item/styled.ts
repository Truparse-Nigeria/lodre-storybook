import styled from "styled-components";

interface MenuProps {
  visible: boolean;
}

export const StyledCategoryItemContainer = styled.div`
  position: relative;
  width: auto;
  padding: 2.5px;
`;

export const StyledCategory = styled.div`
  position: absolute;
  display: flex;
  align-item: flex-start;
`;

export const StyledCategoryItemButton = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  height: 10px;
`;

export const StyledCategoryItemMenu = styled.div<MenuProps>`
  margin: 0px 15px;
  position: relative;
  display: ${(props) => (props.visible ? "initial" : "none")};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
`;
