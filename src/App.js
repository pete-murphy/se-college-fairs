import React, { Component, Fragment } from "react"

import "./App.css"
import data from "./data/data"
import states from "./data/states"
import List from "./components/List"
import SelectDate from "./components/SelectDate"
import SelectState from "./components/SelectState"
import Container from "./containers/Container"

class App extends Component {
  state = {
    states: [],
    dates: [,]
  }
  handleChange = key => value => {
    this.setState({ [key]: value })
  }
  render() {
    return (
      <Container>
        <SelectDate label="Select a start date" />
        <SelectDate label="And an end date" />
        <SelectState
          handleChange={this.handleChange("states")}
          label="Select your statez"
          states={states}
        />
        <List data={data} />
      </Container>
    )
  }
}

export default App
