import * as React from "react";
import { SVGProps } from "react";

const SvgOverview = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.75 13.75v-7.5h6v7.5h-6Zm-7.5-6V.25h6v7.5h-6Zm4.5-1.5v-4.5h-3v4.5h3Zm-4.5 7.5v-4.5h6v4.5h-6Zm1.5-1.5h3v-1.5h-3v1.5Zm7.5 0h3v-4.5h-3v4.5Zm-1.5-12h6v4.5h-6V.25Zm1.5 1.5v1.5h3v-1.5h-3Z"
      fill="#FFC20E"
    />
  </svg>
);

export default SvgOverview;
