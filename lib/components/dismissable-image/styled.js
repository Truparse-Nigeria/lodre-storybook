import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
export var StyledDimissableImageContainer = styled.div({
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    position: "relative",
    background: PALETTE.ash,
});
export var StyledDismissableImage = styled.img({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
});
export var StyledDismissable = styled.button({
    position: "absolute",
    top: "-7.5px",
    right: "-7.5px",
    padding: 0,
    width: "25px",
    height: "25px",
    border: "none",
    outline: "none",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    background: PALETTE.dark,
    path: { fill: PALETTE.light },
});
//# sourceMappingURL=styled.js.map