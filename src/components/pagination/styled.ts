import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface PageNumberProps {
  selected: boolean;
}

export const StyledPageNumber = styled.div<PageNumberProps>`
  padding: 10px 15px;
  border: 1px solid ${PALETTE.primary};
  border-radius: 10px;
  background: ${(props) => (props.selected ? PALETTE.primary : PALETTE.light)};
  cursor: pointer;
`;

export const StyledPageButton = styled.button`
  padding: 7.5px 10px;
  border: 1px solid ${PALETTE.primary};
  background: ${PALETTE.light};
  border-radius: 10px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    vertical-align: middle;
    path {
      fill: ${(props) => (props.disabled ? PALETTE.ash : PALETTE.dark)};
    }
  }

  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
`;
