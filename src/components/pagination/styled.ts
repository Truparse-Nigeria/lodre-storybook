import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface PageNumberProps {
  selected: boolean;
}

export const StyledPageNumber = styled.div<PageNumberProps>`
  width: 15px;
  height: 15px;
  padding: 2.5px;
  border-radius: 1px solid ${PALETTE.primary};
  background: ${(props) => (props.selected ? PALETTE.primary : PALETTE.light)};
`;
