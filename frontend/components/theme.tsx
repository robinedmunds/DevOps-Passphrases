import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: { main: "#1B4163" },
    secondary: {
      main: "#5A612F"
    },
    custom: {
      cardLight: {
        main: "#EFF5FB",
        dark: "#DEEBF7"
      },
      cardDark: "#F0F2E3",
      contrast: "#032F57"
    },
    info: {
      main: "#5A612F"
    }
  }
})

export default theme
