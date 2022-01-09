import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

export interface HRProps {
  hexValue?: string;
}

export const StyledHr = styled.hr<HRProps>`
  border-top: 1px solid
    ${(props) => (props.hexValue ? props.hexValue : PALETTE.dark)};
`;
