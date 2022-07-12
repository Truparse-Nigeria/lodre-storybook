export type PaletteType =
  | "cream"
  | "primary"
  | "dark"
  | "ash"
  | "grey"
  | "light"
  | "border"
  | "primary_light"
  | "success_light"
  | "success"
  | "danger";

export const PALETTE: { [Key in PaletteType]?: string } = {
  primary: "#FFC20E",
  cream: "#FFFAEB",
  dark: "#191919",
  ash: "#8C8C8C",
  grey: "#F7F7F7",
  light: "#FFFFFF",
  border: "#E4E4E4",
  primary_light: "#FFFAEB",
  success: "#34623f",
  success_light: "#d9ffe2",
  danger: "#E15634",
};
