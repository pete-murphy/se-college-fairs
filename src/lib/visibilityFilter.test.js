import visibilityFilter from "./visibilityFilter"
import sampleData from "./sample/data"

describe("visibilityFilter", () => {
  it("shows all items when no filter is set", () => {
    expect(visibilityFilter([], [])(sampleData)).toBe(
      sampleData
    )
  })

  it("shows all items when state filter is set to Mississippi and Louisiana", () => {
    expect(
      visibilityFilter(["Mississippi", "Louisiana"], [])(
        sampleData
      )
    ).toBe(sampleData)
  })

  it("shows 4 items when state filter is set to Mississippi", () => {
    expect(
      visibilityFilter(["Mississippi"], [])(sampleData)
        .length
    ).toBe(4)
  })
})
