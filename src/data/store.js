import { createStore, applyMiddleware, compose } from "redux"
import { routerMiddleware } from "connected-react-router"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import history from "./history"
import reducers from "./reducers"

const isProduction = process.env.NODE_ENV === "production"
const middlewares = [thunk, routerMiddleware(history)]

if (!isProduction) {
  const logger = createLogger({
    collapsed: true,
  })
  middlewares.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store
