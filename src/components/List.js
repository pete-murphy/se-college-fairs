import React, { Fragment } from "react"
import Item from "../containers/Item"
import { sortBy } from "ramda"
import parse from "date-fns/parse"

export default ({ data, visibilityFilter }) => (
  <ul>
    {visibilityFilter(
      sortBy(({ date: { parsed } }) => parse(parsed), data)
    ).map(datum => (
      <Item key={`${datum.key}-I`} datum={datum} />
    ))}
  </ul>
)
