import { createGlobalStyle } from 'styled-components';
import { TYPOGRAPHY } from '../tokens/font';
import { mediaQueries } from '../tokens/sizes';
import './fonts/styles.css';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${TYPOGRAPHY};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .mt-10 {
    margin-top: 10px;
  }
`;
