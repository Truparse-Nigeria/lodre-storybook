import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface MenuProps {
  visible: boolean;
}

export const StyledCategoryItemContainer = styled.div`
  position: relative;
  width: auto;
  padding: 2.5px;
`;

export const StyledCategory = styled.div`
  position: relative;
  display: flex;
  align-item: flex-start;
`;

export const StyledCategoryItemButton = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledCategoryItemMenu = styled.div<MenuProps>`
  padding: 10px;
  border-radius: 15px;
  position: absolute;
  z-index: 9999;
  right: 0%;
  background: ${PALETTE.light};
  display: ${(props) => (props.visible ? "initial" : "none")};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
`;

export const StyledCategoryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7.5px;
  margin-right: 10px;
  border-radius: 50%;
  background: ${PALETTE.primary};
`;
