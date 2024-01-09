import { nightImage, dayImage } from "./common/images";
const colors = {
  whisper: "#F5F5FA",
  black: "#1a1a1a",
  white: "#FFFFFF",
  coffie: "#d7d1d1",
  lemon: "#efe116",
  spring: "#b0bab0",
  boulder: "#7d7d7d",
  teal: "#008080",
};

export const darkTheme = {
  mainColor: colors.black,
  primaryColor: colors.coffie,
  logo: colors.teal,
  background: colors.spring,
  disabledColor: colors.boulder,
  hoverColor: colors.lemon,
  alternativeBackground: colors.white,
  themeButton: {
    backgroundImage: nightImage,
  },

  breakpoint: {
    desktopMax: "1368px",
    desktop: "1200px",
    ipod: "1024px",
    large: "767px",
    medium: "450px",
    small: "320px",
  },
};

export const lightTheme = {
  mainColor: colors.white,
  primaryColor: colors.boulder,
  logo: colors.lemon,
  background: colors.black,
  disabledColor: colors.spring,
  hoverColor: colors.lemon,
  alternativeBackground: colors.spring,
  themeButton: {
    backgroundImage: dayImage,
  },

  breakpoint: {
    desktopMax: "1368px",
    desktop: "1200px",
    ipod: "1024px",
    large: "767px",
    medium: "450px",
    small: "320px",
  },
};
