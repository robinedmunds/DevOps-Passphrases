import Container from "@mui/material/Container"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container>
        <main>{props.children}</main>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
