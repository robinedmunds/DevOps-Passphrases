import React from "react"
import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import { setTitle } from "../helpers"
import Navbar from "../components/Navbar"

const useStyles = makeStyles({
  root: {
    background: "#fff",
  },
})
const Layout = ({ pageTitle, children }) => {
  const title = setTitle(pageTitle)

  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <Helmet title={title} defer={false}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>

      <Box className={classes.root}>
        <Navbar />
        {children}
      </Box>
    </>
  )
}

export default Layout
