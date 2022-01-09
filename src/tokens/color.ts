export type PaletteType = 'cream' | 'primary' | 'dark' | 'ash' | 'grey' | 'light' | 'border';

export const PALETTE: { [Key in PaletteType]?: string } = {
  primary: '#FFC20E',
  cream: '#FFFAEB',
  dark: '#191919',
  ash: '#8C8C8C',
  grey: '#F7F7F7',
  light: '#FFFFFF',
  border: '#E4E4E4',
};
