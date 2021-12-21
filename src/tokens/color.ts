export type PaletteType = 'cream' | 'primary' | 'dark' | 'ash' | 'grey' | 'light';

export const PALETTE: { [Key in PaletteType]: string } = {
  primary: '#FFC20E',
  cream: '#17B64B',
  dark: '#191919',
  ash: '#8C8C8C',
  grey: '#E4E4E4',
  light: '#FFFFFF',
};
