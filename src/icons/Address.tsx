import * as React from "react";
import { SVGProps } from "react";

const SvgAddress = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 13 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.25 12.454a6 6 0 1 1 4.86-10.329 6 6 0 0 1-3.36 10.329v2.296h-1.5v-2.296ZM6 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM.75 15.5h10.5V17H.75v-1.5Z"
      fill="#FFC20E"
    />
  </svg>
);

export default SvgAddress;
