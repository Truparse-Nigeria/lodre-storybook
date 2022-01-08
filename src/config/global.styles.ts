import { createGlobalStyle, css } from 'styled-components';
import { PALETTE } from '../tokens/color';
import { FONT_WEIGHT, TYPOGRAPHY } from '../tokens/font';
import { RADIUS } from '../tokens/sizes';
import './fonts/styles.css';

const space: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100];

const spaces = () => {
  let styles = '';
  for (let i of space) {
    styles += `
      .mt-${i} {
         margin-top: ${i}px;
       }
      .mx-${i} {
        margin: auto ${i}px;
      }
      .my-${i} {
        margin: ${i}px auto;
      }
      .mb-${i} {
        margin-bottom: ${i}px
      }
      .m-${i} {
        margin: ${i}px
      }
      .pt-${i} {
        padding-top: ${i}px;
      }
     .px-${i} {
       padding: auto ${i}px;
     }
     .py-${i} {
       padding: ${i}px auto;
     }
     .pb-${i} {
       padding-bottom: ${i}px
     }
     .p-${i} {
       padding: ${i}px
     }
     `;
  }

  return css`
    ${styles}
  `;
};

const bg = () => {
  let styles = '';
  for (let color of Object.values(PALETTE)) {
    styles += `
      .bg-${color} {
         background-color: ${color};
       }
      .text-${color} {
        color:  ${color};
      }
     `;
  }

  return css`
    ${styles}
  `;
};

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${TYPOGRAPHY};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  b {
    font-weight: ${FONT_WEIGHT.w600}
  }
  
  .rounded {
    border-radius: ${RADIUS.small}px;
    overflow: hidden;
  }

  ${spaces()};
  ${bg()};
`;
