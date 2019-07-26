import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import history from "./data/history"
import { DEFAULT, DASHBOARD } from "./common/constants/routingConstants"

function App() {
  const muiTheme = createMuiTheme({
    palette: {
      type: "light",
    },
  })
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Router history={history}>
        <CssBaseline />
        <Switch>
          <Route exact path={DEFAULT} render={() => <h1>Default</h1>} />
          <Route path={DASHBOARD} render={() => <h1>Dashboard</h1>} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
