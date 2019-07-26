import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import history from "./history"
import dashboardReducer from "../routes/dashboard/data/dashboardReducer"

export default combineReducers({
  router: connectRouter(history),
  dashboard: dashboardReducer,
})
