import visibilityFilter from "./visibilityFilter"
import sampleData from "./sample/data"

describe("visibilityFilter", () => {
  it("shows all items when no filter is set", () => {
    expect(
      visibilityFilter([], [undefined, undefined])(
        sampleData
      )
    ).toEqual(sampleData)
  })

  it("shows all items when state filter is set to Mississippi and Louisiana", () => {
    expect(
      visibilityFilter(
        ["Mississippi", "Louisiana"],
        [undefined, undefined]
      )(sampleData)
    ).toEqual(sampleData)
  })

  it("shows 4 items when state filter is set to Mississippi", () => {
    expect(
      visibilityFilter(
        ["Mississippi"],
        [undefined, undefined]
      )(sampleData).length
    ).toBe(4)
  })

  it("shows all items when one of the date filters is not set", () => {
    expect(
      visibilityFilter([], ["2018-10-20", undefined])(
        sampleData
      )
    ).toEqual(sampleData)
  })

  it("shows 2 items when the date is set to after Oct 20, before Nov 30", () => {
    expect(
      visibilityFilter([], ["2018-10-20", "2018-11-30"])(
        sampleData
      ).length
    ).toBe(2)
  })
})
