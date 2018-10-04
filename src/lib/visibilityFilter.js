const { isAfter, isBefore, addDays } = require("date-fns")

const isEmpty = xs => xs.length === 0

export const visibilityFilter = (
  states,
  [dateStart, dateEnd]
) => data =>
  data
    .filter(
      ({ state }) =>
        !isEmpty(states) ? states.includes(state) : true
    )
    .filter(
      ({ date: { parsed } }) =>
        dateStart && dateEnd
          ? isAfter(parsed, dateStart) &&
            isBefore(parsed, addDays(dateEnd, 1))
          : true
    )
