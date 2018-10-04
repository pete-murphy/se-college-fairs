import React from "react"

export default ({
  datum: {
    date: { formatted, time },
    event,
    location,
    city,
    state,
    sourceLabel,
    sourceURL
  }
}) => (
  <li>
    <h3>{event}</h3>
    <h4>{location}</h4>
    <div>
      {city}, {state}
    </div>
    <div>
      {formatted}, {time}
    </div>
    <div>
      Source: <a href={sourceURL}>{sourceLabel}</a>{" "}
    </div>
  </li>
)
