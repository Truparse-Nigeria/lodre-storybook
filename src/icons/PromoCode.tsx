import * as React from "react";
import { SVGProps } from "react";

const SvgPromoCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5.75v22.5H1.75A1.25 1.25 0 0 1 .5 22v-6.875a3.125 3.125 0 1 0 0-6.25V2A1.25 1.25 0 0 1 1.75.75H15.5Zm2.5 0h6.25A1.25 1.25 0 0 1 25.5 2v6.875a3.125 3.125 0 1 0 0 6.25V22a1.25 1.25 0 0 1-1.25 1.25H18V.75Z"
      fill="#191919"
    />
  </svg>
);

export default SvgPromoCode;
