import { ThemeProvider } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import theme from "./theme"

const Hero = () => {
  theme.typography.h1 = {
    fontSize: "3.0rem",
    margin: "6.0rem 0",
    color: theme.palette.custom.contrast,
    [theme.breakpoints.down("md")]: {
      fontSize: "2.4rem"
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" align="center">
        Generate strong, memorable and easy-to-type passphrases.
      </Typography>
    </ThemeProvider>
  )
}

export default Hero
