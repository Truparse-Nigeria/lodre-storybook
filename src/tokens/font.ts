export type TextType = 'small' | 'pSmall' | 'pLarge' | 'hSmall' | 'hLarge';
export type WeightType = 'w200' | 'w300' | 'w400' | 'w500' | 'w600' | 'w700';

export const TYPOGRAPHY = '"Montserrat", sans-serif';
export const FONT_WEIGHT: { [key in WeightType]: string } = {
  w200: '200',
  w300: '300',
  w400: '400',
  w500: '500',
  w600: '600',
  w700: '700',
};
export const FONT_SIZE: { [key in TextType]: number } = {
  small: 12,
  pSmall: 14,
  pLarge: 16,
  hSmall: 18,
  hLarge: 20,
};
