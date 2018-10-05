const parse = require("date-fns/parse")
const isAfter = require("date-fns/is_after")

const DAYLIGHT_SAVINGS_END_DATE = "November 4, 2018"

const fixTime = tB =>
  (t =>
    /noon/i.test(t)
      ? "12:00 PM"
      : !/\d/.test(t)
        ? "12:00 AM"
        : /[a|p]/i.test(t)
          ? t.replace(
              /[\d|:]+/,
              l => (/:/.test(l) ? `${l} ` : `${l}:00 `)
            )
          : `${t}:00 ${
              t.split(/:/)[0] >= 9 ? "AM" : "PM"
            }`)(tB.replace(/\s/, " "))

const withYear = d =>
  `${d}, ${/201\d/.test(d) ? "" : "2018"}`

const parseDate = (date, time = "00:00") =>
  parse(
    `${withYear(date.replace(/\s/, " ").trim())} ${fixTime(
      time
    )} ${
      isAfter(
        parse(withYear(date.replace(/\s/, " ").trim())),
        DAYLIGHT_SAVINGS_END_DATE
      )
        ? "EST"
        : "EDT"
    }`
  )

module.exports = parseDate
