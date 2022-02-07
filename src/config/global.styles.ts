// @ts-ignore
import { createGlobalStyle, css } from "styled-components";
import { PALETTE } from "../tokens/color";
import { FONT_WEIGHT, TYPOGRAPHY } from "../tokens/font";
import { mediaQueries, RADIUS, VIEWPORT } from "../tokens/sizes";
import "./fonts/styles.css";

const space: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100];

const spaces = () => {
  let styles = "";
  for (let i of space) {
    styles += `
      .mt-${i} {
         margin-top: ${i}px;
       }
      .mx-${i} {
        margin-left: ${i}px;
        margin-right: ${i}px;
      }
      .my-${i} {
        margin-top: ${i}px;
        margin-bottom: ${i}px;
      }
      .mb-${i} {
        margin-bottom: ${i}px;
      }
      .m-${i} {
        margin: ${i}px;
      }
      .pt-${i} {
        padding-top: ${i}px;
      }
     .px-${i} {
       padding-left: ${i}px;
       padding-right: ${i}px;
     }
     .py-${i} {
      padding-top: ${i}px;
      padding-bottom: ${i}px;
     }
     .pb-${i} {
       padding-bottom: ${i}px;
     }
     .p-${i} {
       padding: ${i}px;
     }
     .h-${i} {
       height: ${i}%;
     }
     `;
  }

  return css`
    ${styles}
  `;
};

const bg = () => {
  let styles = "";
  const colors = Object.keys(PALETTE);
  let count = 0;
  for (let color of colors) {
    let hex = Object.values(PALETTE)[count];
    styles += `
      .bg-${color} {
         background-color: ${hex};
       }
      .text-${color} {
        color: ${hex};
      }
     `;
    count++;
  }
  return css`
    ${styles}
  `;
};

export const hidden = () => {
  let hidden = "";

  for (let size of ["xs", "sm", "md", "lg", "xl"]) {
    let newSize: keyof typeof VIEWPORT = size as keyof typeof VIEWPORT;
    hidden += `
      ${mediaQueries(newSize)(`
        .hidden-${size}{
          visibility: hidden;
          pointer-events: none;
        }
        .block-${size}{
          visibility: visible;
          pointer-events: auto;
        }
      `)}
    `;
  }

  return css`
    ${hidden}
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
    font-weight: ${FONT_WEIGHT.w600};
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .rounded {
    border-radius: ${RADIUS.small}px;
    overflow: hidden;
  }

  ${spaces()};
  ${bg()};
  ${hidden()};
`;
