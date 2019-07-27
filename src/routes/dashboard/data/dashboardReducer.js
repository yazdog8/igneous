import { createReducer } from "redux-starter-kit"
import {
  setDashboardData,
  setLoadingValue,
  resetDashboard,
} from "./dashboardActions"

const dashboardInitialState = {
  displayCharts: [],
  isLoading: true,
  timeSeries: "weekly",
  data: {},
}

export default createReducer(dashboardInitialState, {
  [setDashboardData]: (state, action) => {
    const displayCharts = Object.keys(action.payload)
    return { ...state, data: action.payload, displayCharts }
  },
  [resetDashboard]: () => ({
    ...dashboardInitialState,
  }),
  [setLoadingValue]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
})
