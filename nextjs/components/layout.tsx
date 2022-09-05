import Container from "@mui/material/Container"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <main>{children}</main>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Layout
