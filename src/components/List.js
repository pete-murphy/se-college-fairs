import React, { Fragment } from "react"

export default ({ data }) => (
  <ul>
    {data.map(datum => (
      <li key={datum.key}>
        <dl>
          {Object.entries(datum).map(([key, value]) => (
            <Fragment key={`${datum.key}-${key}-f`}>
              <dt key={`${datum.key}-${key}`}>{key}</dt>
              {typeof value === "string" ? (
                <dd key={`${datum.key}-${key}-v`}>
                  {value}
                </dd>
              ) : (
                Object.entries(value).map(([k, v]) => (
                  <Fragment
                    key={`${datum.key}-${key}-${k}-f`}
                  >
                    <dt key={`${datum.key}-${key}-${k}`}>
                      {k}
                    </dt>
                    <dd key={`${datum.key}-${key}-${k}-v`}>
                      {v}
                    </dd>
                  </Fragment>
                ))
              )}
            </Fragment>
          ))}
        </dl>
      </li>
    ))}
  </ul>
)
