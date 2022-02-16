import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

export const StyledColorPicker = styled.input.attrs({ type: "color" })({
  height: "50px",
  width: "100%",
  background: PALETTE.light,
  padding: "5px",
  border: `1px solid ${PALETTE.grey}`,
  borderRadius: "5px",
});
