import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { TYPOGRAPHY } from "../../tokens/font";
import { HEIGHTS } from "../../tokens/sizes";

type InputType = {
    width: string;
}

export const StyledInput = styled.input<InputType>`
    border-radius: 4px;
    border: 1px solid ${PALETTE.grey};
    height: ${HEIGHTS.inputs.default}px;
    padding: 0 20px;
    width: ${props => props.width};

    &:focus {
        outline: 2px solid ${PALETTE.primary}; 
    }

    &::placeholder {
        color: ${PALETTE.ash};
        font-size: ${TYPOGRAPHY.size.m1};
    }
`;

export const StyledInputFlex = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledInputPrefix = styled.div`
    margin-right: 10px;
`;

export const StyledInputSuffix = styled.div`
    margin-left: 10px;
`

export const StyledInputContainer = styled.div`
    margin-bottom: 20px;
`