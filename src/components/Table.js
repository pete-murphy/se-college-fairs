import React from "react"
import { deriveSchema } from "../lib"

export default ({ data }) => (
  <table>
    <thead>
      {deriveSchema(data).map(key => (
        <th>{key}</th>
      ))}
    </thead>
    <tbody>
      {data.map(row => (
        <tr>
          {Object.values(row).map(value => (
            <td>{value || "Not specified"}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)
