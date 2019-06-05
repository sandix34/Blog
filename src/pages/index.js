import React from "react"
import { Link, graphql } from "gatsby"

import GLayout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <GLayout page="1">
    <SEO title="Home" />
    {
      data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>{node.excerpt}</p>
        </div>
      ))
    }
  </GLayout>
)

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date],
  order: DESC }) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          slug
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
