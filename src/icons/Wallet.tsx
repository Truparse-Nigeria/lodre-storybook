import * as React from "react";
import { SVGProps } from "react";

const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.5 5.75h3.75A1.25 1.25 0 0 1 25.5 7v15a1.25 1.25 0 0 1-1.25 1.25H1.75A1.25 1.25 0 0 1 .5 22V2A1.25 1.25 0 0 1 1.75.75H20.5v5ZM3 8.25v12.5h20V8.25H3Zm0-5v2.5h15v-2.5H3Zm13.75 10h3.75v2.5h-3.75v-2.5Z"
      fill="#191919"
    />
  </svg>
);

export default SvgWallet;
