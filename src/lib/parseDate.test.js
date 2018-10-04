import parseDate from "./parseDate"
import { format } from "date-fns"

describe("parseDate", () => {
  it("parses a date without year", () => {
    const input = "October 3"
    const expected = "October 3, 2018"
    expect(
      format(parseDate(input), "MMMM D, YYYY")
    ).toEqual(expected)
  })

  it("parses a date with day and no year", () => {
    const input = "Thursday, November 8"
    const expected = "November 8, 2018"
    expect(
      format(parseDate(input), "MMMM D, YYYY")
    ).toEqual(expected)
  })

  it("parses a date with time", () => {
    const input = ["Thursday, November 8", "6:00 PM"]
    const expected = "November 8, 2018"
    expect(
      format(parseDate(...input), "MMMM D, YYYY")
    ).toEqual(expected)
  })

  it("parses a date with badly-formatted time", () => {
    const input = ["November 21", "6:00pm"]
    const expected = "November 21, 2018, 6:00 PM"
    expect(
      format(parseDate(...input), "MMMM D, YYYY, h:mm A")
    ).toEqual(expected)
  })

  it("parses a date with badly-formatted time (AM)", () => {
    const input = ["November 21", "6:00am"]
    const expected = "November 21, 2018, 6:00 AM"
    expect(
      format(parseDate(...input), "MMMM D, YYYY, h:mm A")
    ).toEqual(expected)
  })
})
