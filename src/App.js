import React, { Component } from "react"

import data from "./data/data"
import stateList from "./data/states"
import List from "./components/List"
import SelectDate from "./components/SelectDate"
import SelectState from "./components/SelectState"
import Container from "./containers/Container"
import Count from "./containers/Count"

import { visibilityFilter } from "./lib"

class App extends Component {
  state = {
    states: [],
    dateStart: undefined,
    dateEnd: undefined,
    data
  }

  handleChange = key => value => {
    this.setState(() => ({
      [key]: value
    }))
  }

  render() {
    const { states, dateStart, dateEnd } = this.state
    return [
      <Container>
        <SelectDate
          handleChange={this.handleChange("dateStart")}
          label="Select a start date"
        />
        <SelectDate
          handleChange={this.handleChange("dateEnd")}
          label="And an end date"
        />
        <SelectState
          handleChange={this.handleChange("states")}
          label="Select your statez"
          states={stateList}
        />
        <Count
          count={
            visibilityFilter(states, [dateStart, dateEnd])(
              data
            ).length
          }
          total={data.length}
        />
        <div>
          <span className="red">*</span> Double check the
          actual times on website 😉
        </div>
      </Container>,
      <Container>
        <List
          data={this.state.data}
          visibilityFilter={visibilityFilter(states, [
            dateStart,
            dateEnd
          ])}
        />
      </Container>
    ]
  }
}

export default App
