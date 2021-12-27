import styled from "styled-components";
import { PALETTE, PaletteType } from "../../tokens/color";

type IconType = {
    bgColor: PaletteType;
    width: number;
    height: number;
}

export const StyledIcon = styled.div<IconType>`
    background-color: ${props => PALETTE[props.bgColor]};
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;