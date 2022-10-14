import * as React from "react";
import { SVGProps } from "react";
const SvgLocationPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="m12 20.9 4.95-4.95a7 7 0 1 0-9.9 0L12 20.9Zm0 2.828-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728ZM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
      fill="#000"
    />
  </svg>
);
export default SvgLocationPin;
