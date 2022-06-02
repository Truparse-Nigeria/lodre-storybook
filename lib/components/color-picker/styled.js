import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
export var StyledColorPicker = styled.input.attrs({ type: "color" })({
    height: "50px",
    width: "100%",
    background: PALETTE.light,
    padding: "5px",
    border: "1px solid ".concat(PALETTE.grey),
    borderRadius: "5px",
});
//# sourceMappingURL=styled.js.map