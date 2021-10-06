import React, { Component } from "react"
import { connect } from "react-redux"

import Box from "@material-ui/core/Box"
import Layout from "../templates/Layout"
import Dropdowns from "../components/Dropdowns"
import Phrases from "../components/Phrases"
import { fetchPhrases } from "../state/actions"

class LandingPage extends Component {
  componentDidMount = () => {
    // fetch default response from api
    // console.log("componentDidMount: LandingPage")
    this.props.fetchPhrases()
  }

  render = () => {
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
}

export default connect(null, { fetchPhrases })(LandingPage)
