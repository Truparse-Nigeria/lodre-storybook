import { createGlobalStyle } from 'styled-components';
import { TYPOGRAPHY } from '../tokens/font';
import './fonts/styles.css';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${TYPOGRAPHY.type.primary};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;