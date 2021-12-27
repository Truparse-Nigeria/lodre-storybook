import styled from 'styled-components';
import { CONTAINER, mediaQueries } from '../../tokens/sizes';

type ContainerType = {
    fluid: boolean;
}
export const StyledContainer = styled.div<ContainerType>`
  max-width: ${props => props.fluid ? '100%': CONTAINER+'px'};
  margin: 0 auto;
  overflow: auto;
  padding: 0 1rem;
`;
