import * as React from "react";
import { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6Z" fill="#000" />
  </svg>
);
export default SvgPlus;
