import React from "react"
import Layout from "../templates/Layout"
import ReduxFormExample from "../components/ReduxFormExample"
import hamster from "../images/hamster.jpg"

const LandingPage = () => (
  <Layout pageTitle="landing page">
    <h1>gatsby-starter-robin</h1>
    <p>Custom strapi, sass, redux, gatsby boilerplate</p>
    <img src={hamster} alt="hamster" />
    <hr />
    <ReduxFormExample />
  </Layout>
)

export default LandingPage
