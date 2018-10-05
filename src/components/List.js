import React from "react"
import Item from "../containers/Item"
import { sort } from "ramda"
import { compareAsc } from "date-fns"

export default ({ data, visibilityFilter }) => (
  <ul>
    {visibilityFilter(
      sort(
        ({ date: A }, { date: B }) =>
          compareAsc(A.parsed, B.parsed),
        data
      )
    ).map(datum => (
      <Item key={`${datum.key}-I`} datum={datum} />
    ))}
  </ul>
)
