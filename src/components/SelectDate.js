import React, { Fragment } from "react"
import { Label } from "@atlaskit/field-base"
import { DatePicker } from "@atlaskit/datetime-picker"

export default ({ onChange = () => {}, label }) => (
  <Fragment>
    <Label label={label} />
    <DatePicker onChange={onChange} />
  </Fragment>
)
