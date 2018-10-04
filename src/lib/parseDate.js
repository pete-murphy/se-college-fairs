const { format, parse } = require("date-fns")

const splitTime = str =>
  str.replace(/[\d|:]+/, l => l + " ")

const parseDate = (date, time = "00:00", zone = "EST") =>
  parse(
    `${date}, ${/201/.test(date) ? "" : "2018 "} ${time &&
      splitTime(time)} ${zone}`
  )

module.exports = parseDate
