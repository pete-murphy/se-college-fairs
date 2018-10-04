import React, { Fragment } from "react"
import Select from "@atlaskit/select"
import { Label } from "@atlaskit/field-base"

export default ({
  label,
  states,
  handleChange = console.log
}) => (
  <Fragment>
    <Label label={label} />
    <Select
      onChange={states =>
        handleChange(states.map(({ value }) => value))
      }
      className="multi-select"
      classNamePrefix="react-select"
      options={states}
      isMulti
      isSearchable={false}
      placeholder="Choose a State"
    />
  </Fragment>
)
