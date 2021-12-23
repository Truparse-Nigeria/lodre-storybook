import * as React from "react";
import { SVGProps } from "react";

const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10Zm-4.987-3.744A7.966 7.966 0 0 0 10 18a7.97 7.97 0 0 0 5.167-1.892A6.978 6.978 0 0 0 10.16 14a6.982 6.982 0 0 0-5.147 2.256ZM3.616 14.82A8.975 8.975 0 0 1 10.16 12a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187v-.001ZM10 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#191919"
    />
  </svg>
);

export default SvgUser;
