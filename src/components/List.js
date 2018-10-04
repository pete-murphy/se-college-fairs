import React, { Fragment } from "react"
import Item from "../containers/Item"

export default ({ data, visibilityFilter }) => (
  <ul>
    {visibilityFilter(data).map(datum => (
      <Item key={`${datum.key}-I`} datum={datum} />
    ))}
  </ul>
)
