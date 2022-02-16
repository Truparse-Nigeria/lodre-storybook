import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface MenuProps {
  visible: boolean;
}

export const StyledCategoryContainer = styled.div({
  position: "relative",
  width: "100%",
  height: "100%",
  background: PALETTE.light,
  padding: "25px 10px",
  borderRadius: "10px",
});

export const StyledCategoryItemContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 5px 5px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 5px;
`;

export const StyledCategoryItemMenu = styled.div<MenuProps>`
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  z-index: 9999;
  top: 0%;
  right: -100%;
  background: ${PALETTE.light};
  display: ${(props) => (props.visible ? "initial" : "none")};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  box-shadow: 0 0 15px 7px rgba(0, 0, 0, 0.1);
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
