import React from "react"
import { Link, graphql } from "gatsby"

import GLayout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <GLayout page="1">
    <SEO title="Home" />
    <h1>{data.site.siteMetadata.title}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </GLayout>
)

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`

export default IndexPage
