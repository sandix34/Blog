import React from "react"
import { Link } from "gatsby"

import { List, Avatar, Divider } from "antd"

const Bio = () => {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar size={64} />}
        title={<Link to="/about">Sandrine Zocca</Link>}
        description="ceci est la description."
      />
    </List.Item>
  )
}

export default Bio
