import styled from 'styled-components';
import { ComponentSize, RADIUS } from '../../tokens/sizes';

interface StyledRoundedProps {
  borderRadius: ComponentSize;
}

export const StyledRounded = styled.div<StyledRoundedProps>`
  border-radius: ${(props) => RADIUS[props.borderRadius]}px;
  overflow: hidden;
`;
