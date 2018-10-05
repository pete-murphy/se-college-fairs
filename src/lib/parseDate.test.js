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
    const input = ["November 1", "6:00pm"]
    const expected = "November 1, 2018, 6:00 PM"
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

  it("parses a date with badly-formatted time (6pm)", () => {
    const input = ["November 21", "6pm"]
    const expected = "November 21, 2018, 6:00 PM"
    expect(
      format(parseDate(...input), "MMMM D, YYYY, h:mm A")
    ).toEqual(expected)
  })

  it("doesn't replace AM with PM", () => {
    const input = ["September 17, 2018", "8:00 AM"]
    const expected = "September 17, 2018, 8:00 AM"
    expect(
      format(parseDate(...input), "MMMM D, YYYY, h:mm A")
    ).toEqual(expected)
  })

  it("parses a date with bad unicode space in date", () => {
    const input = ["September 17, 2018 ", " 6pm"]
    const expected = "September 17, 2018, 6:00 PM"
    expect(
      format(parseDate(...input), "MMMM D, YYYY, h:mm A")
    ).toEqual(expected)
  })

  it("parses a date with bad unicode space in time", () => {
    const input = ["October 9", "8:30 am"]
    const expected = "October 9, 2018, 8:30 AM"
    expect(
      format(parseDate(...input), "MMMM D, YYYY, h:mm A")
    ).toEqual(expected)
  })

  it("parses a date with badly-formatted time (Noon)", () => {
    const input = ["November 21", "Noon"]
    const expected = "November 21, 2018, 12:00 PM"
    expect(
      format(parseDate(...input), "MMMM D, YYYY, h:mm A")
    ).toEqual(expected)
  })

  it("defaults to PM if less than 9", () => {
    const input = ["November 21", "6"]
    const expected = "November 21, 2018, 6:00 PM"
    expect(
      format(parseDate(...input), "MMMM D, YYYY, h:mm A")
    ).toEqual(expected)
  })

  it("defaults to AM if greater than or equal to 9", () => {
    const input = ["November 21", "9:30"]
    const expected = "November 21, 2018, 9:30 AM"
    expect(
      format(parseDate(...input), "MMMM D, YYYY, h:mm A")
    ).toEqual(expected)
  })

  it("defaults to 12:00 AM if given bad time", () => {
    const input = ["November 21", "Various"]
    const expected = "November 21, 2018, 12:00 AM"
    expect(
      format(parseDate(...input), "MMMM D, YYYY, h:mm A")
    ).toEqual(expected)
  })
})
