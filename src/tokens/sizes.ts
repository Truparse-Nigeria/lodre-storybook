export type ComponentSize = 'default' | 'large' | 'small';

type ComponentType = 'inputs' | 'buttons';
type Elements = { [key in ComponentSize]: number };
export type ViewportType = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export const VIEWPORT: { [key in ViewportType]?: number } = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1200,
};

export const SIDE_PADDINGS: { [key in ComponentSize]: number } = {
  large: 30,
  default: 25,
  small: 20,
};

export const RADIUS: { [key in ComponentSize]: number } = {
  large: 12,
  default: 8,
  small: 4,
};

export const HEIGHTS: { [key in ComponentType]: Elements } = {
  inputs: {
    large: 55,
    default: 45,
    small: 35,
  },
  buttons: {
    large: 58,
    default: 52,
    small: 45,
  },
};

export const CONTAINER: { [key in ViewportType]?: number } = {
  lg: 1140,
  xl: 1200,
};

export const mediaQueries = (key: keyof typeof VIEWPORT) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${VIEWPORT[key]}px) { ${style} }`;
};
