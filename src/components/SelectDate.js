import React, { Fragment } from "react"
import { Label } from "@atlaskit/field-base"
import { DatePicker } from "@atlaskit/datetime-picker"
import format from "date-fns/format"

export default ({ handleChange = console.log, label }) => (
  <Fragment>
    <Label label={label} />
    <DatePicker
      dateFormat="MMMM D, YYYY"
      onChange={handleChange}
      formatDisplayLabel={format}
    />
  </Fragment>
)
