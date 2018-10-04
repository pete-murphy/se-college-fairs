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
    <h2>{formatted}</h2>
    <h3>{event}</h3>
    {location !== "Not specified" && <h4>{location}</h4>}
    <div>
      {city}, {state}
    </div>
    <div>{time}*</div>
    <div>
      Source: <a href={sourceURL}>{sourceLabel}</a>{" "}
    </div>
  </li>
)
