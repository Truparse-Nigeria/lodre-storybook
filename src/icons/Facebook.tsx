import * as React from "react";
import { SVGProps } from "react";

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={24} fill="#4267B2" />
    <path
      d="M25.602 40V25.403h4.9l.733-5.688h-5.633v-3.633c0-1.646.458-2.769 2.82-2.769l3.012-.001V8.224c-.521-.07-2.31-.224-4.39-.224-4.343 0-7.316 2.65-7.316 7.52v4.195h-4.912v5.688h4.912V40h5.874Z"
      fill="#fff"
    />
  </svg>
);

export default SvgFacebook;
