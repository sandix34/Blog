import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import { List, Avatar, Divider } from "antd"

const Bio = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              author
            }
          }
        }
      `}
      render={data => (
        <>  
        <Divider orientation="left">Author</Divider>  
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar size={64} />}
            title={<Link to="/about">{data.site.siteMetadata.author}</Link>}
            description="ceci est la description."
          />
        </List.Item>
        </>
      )}
    />
  )
}

export default Bio
