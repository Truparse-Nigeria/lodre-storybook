import * as React from "react";
import { SVGProps } from "react";

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 6V0h2v6h6v2H8v6H6V8H0V6h6Z" fill="#191919" />
  </svg>
);

export default SvgPlus;
