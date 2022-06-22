import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface MenuProps {
  visible: boolean;
}

export const StyledCategoryContainer = styled.div({
  height: "100%",
  background: PALETTE.light,
  borderRadius: "10px",
});

export const StyledCategoryItemContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 5px 5px;
`;

export const StyledCategory = styled.div`
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 100% 1fr;
  align-item: start;
`;

export const StyledCategoryItemButton = styled.div`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 5px;
`;

export const StyledCategoryItemMenu = styled.div<MenuProps>`
  width: 740px;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  z-index: 9999;
  top: 0%;
  left: 100%;
  background: ${PALETTE.light};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  box-shadow: 0 0 15px 7px rgba(0, 0, 0, 0.1);
`;

export const StyledCategoryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7.5px;
  border-radius: 50%;
  background: ${PALETTE.primary};
`;
