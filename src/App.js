import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import history from "./data/history"
import { DEFAULT, DASHBOARD } from "./common/constants/routingConstants"

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={DEFAULT} render={() => <h1>Default</h1>} />
        <Route path={DASHBOARD} render={() => <h1>Dashboard</h1>} />
      </Switch>
    </Router>
  )
}

export default App
