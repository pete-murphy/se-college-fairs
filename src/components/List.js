import React, { Fragment } from "react"
import Item from "../containers/Item"
import {
  reduce,
  either,
  comparator,
  gt,
  prop,
  map,
  sort,
  sortBy
} from "ramda"

const firstTruthy = ([head, ...tail]) =>
  reduce(either, head, tail)
const makeComparator = propName =>
  comparator((a, b) =>
    gt(prop(propName, a), prop(propName, b))
  )
const sortByProps = (props, list) =>
  sort(firstTruthy(map(makeComparator, props)), list)

export default ({ data, visibilityFilter }) => (
  <ul>
    {visibilityFilter(
      sortBy(({ date: { formatted } }) => formatted)(data)
    ).map(datum => (
      <Item key={`${datum.key}-I`} datum={datum} />
    ))}
  </ul>
)
