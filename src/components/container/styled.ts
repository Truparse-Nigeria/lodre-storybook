import styled from "styled-components";
import { PALETTE, PaletteType } from "../../tokens/color";
import { CONTAINER, mediaQueries } from "../../tokens/sizes";

type ContainerType = {
  fluid: boolean;
  bgColor?: PaletteType;
};
export const StyledContainer = styled.div<ContainerType>`
  max-width: ${(props) => (props.fluid ? "100%" : CONTAINER.lg + "px")};
  ${(props) => props.bgColor && `backgorund-color: ${PALETTE[props.bgColor]}`}
  margin: 0 auto;
  overflow: auto;
  padding: 0 1rem;
  ${(props) =>
    mediaQueries("xl")(`
  max-width: ${props.fluid ? "100%" : CONTAINER.xl + "px"};
  `)}
`;
