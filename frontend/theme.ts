import { Color, Palette, PaletteOptions } from "@mui/material"
import { createTheme } from "@mui/material/styles"

export interface CardLight extends Color {
  main: string
  dark: string
}

const cardLight: CardLight = {
  main: "#EFF5FB",
  dark: "#DEEBF7",
  50: "",
  100: "",
  200: "",
  300: "",
  400: "",
  500: "",
  600: "",
  700: "",
  800: "",
  900: "",
  A100: "",
  A200: "",
  A400: "",
  A700: ""
}

export interface CardDark extends Color {
  main: string
}

const cardDark: CardDark = {
  main: "#F0F2E3",
  50: "",
  100: "",
  200: "",
  300: "",
  400: "",
  500: "",
  600: "",
  700: "",
  800: "",
  900: "",
  A100: "",
  A200: "",
  A400: "",
  A700: ""
}

export interface Contrast extends Color {
  main: string
}

const contrast: Contrast = {
  main: "#032F57",
  50: "",
  100: "",
  200: "",
  300: "",
  400: "",
  500: "",
  600: "",
  700: "",
  800: "",
  900: "",
  A100: "",
  A200: "",
  A400: "",
  A700: ""
}

export interface Info extends Color {
  main: string
}

const info: Info = {
  main: "#5A612F",
  50: "",
  100: "",
  200: "",
  300: "",
  400: "",
  500: "",
  600: "",
  700: "",
  800: "",
  900: "",
  A100: "",
  A200: "",
  A400: "",
  A700: ""
}

interface MyPaletteExtensions {
  cardLight: CardLight
  cardDark: CardDark
  contrast: Contrast
  info: Info
}

declare module "@mui/material/styles" {
  interface Palette extends MyPaletteExtensions {}
  interface PaletteOptions extends MyPaletteExtensions {}
}

const myPalette: PaletteOptions = {
  primary: { main: "#1B4163" },
  secondary: {
    main: "#5A612F"
  },
  cardLight,
  cardDark,
  contrast,
  info
}

const theme = createTheme({ palette: myPalette })

export { cardLight, cardDark, contrast, info, theme }
