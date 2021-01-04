import React from "react"
import { Helmet } from "react-helmet"
import { setTitle } from "../helpers"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "reset.css"
import "../styles/main.scss"

const Layout = ({ pageTitle, children }) => {
  const title = setTitle(pageTitle)

  return (
    <>
      <Helmet title={title} defer={false} />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
