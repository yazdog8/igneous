import React from "react"
import { Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import history from "./data/history"
import store from "./data/store"
import { DEFAULT, DASHBOARD } from "./common/constants/routingConstants"

import Dashboard from "./routes/dashboard/Dashboard"

function App() {
  const muiTheme = createMuiTheme({
    palette: {
      type: "light",
    },
  })
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <ConnectedRouter history={history}>
          <CssBaseline />
          <Switch>
            <Route exact path={DEFAULT} render={() => <h1>Default</h1>} />
            <Route path={DASHBOARD} component={Dashboard} />
          </Switch>
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>
  )
}

export default App
