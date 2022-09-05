import Container from "@mui/material/Container"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
