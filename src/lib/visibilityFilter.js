export default (states, [startDate, endDate]) => data =>
  data.filter(({ state }) => states.includes(state))
