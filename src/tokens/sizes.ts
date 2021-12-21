export type ComponentSize = 'default' | 'large' | 'small';

type ComponentType = 'inputs' | 'buttons';
type Elements = { [key in ComponentSize]: number };

export const SIDE_PADDINGS: { [key in ComponentSize]: number } = {
  large: 30,
  default: 25,
  small: 20,
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
  }
};
