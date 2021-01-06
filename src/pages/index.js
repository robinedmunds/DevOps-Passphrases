import React from "react"
import Box from "@material-ui/core/Box"
import Layout from "../templates/Layout"
import Dropdowns from "../components/Dropdowns"
import Phrases from "../components/Phrases"

const LandingPage = () => {
  return (
    <Layout pageTitle="landing page">
      <Box my="4rem" textAlign="center" fontSize="h6.fontSize">
        <h1>Generator strong, memorable and easy-to-type passphrases.</h1>
      </Box>
      <Dropdowns />
      <Phrases />
    </Layout>
  )
}

export default LandingPage
