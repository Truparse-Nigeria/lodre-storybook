import * as React from "react";
import { SVGProps } from "react";
const SvgShoppingCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M2 14V2H0V0h3a1 1 0 0 1 1 1v12h12.438l2-8H6V3h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H3a1 1 0 0 1-1-1Zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fill="#191919"
    />
  </svg>
);
export default SvgShoppingCart;
