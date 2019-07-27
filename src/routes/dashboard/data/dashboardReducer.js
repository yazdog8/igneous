import { createReducer } from "redux-starter-kit"
import {
  setDashboardData,
  setLoadingValue,
  resetDashboard,
  setTimeSeriesValue,
  resetDisplay,
  updateIsShown,
} from "./dashboardActions"
import { WEEKLY, TIMESERIES, USA_GDP } from "./dashboardConstants"

const dashboardInitialState = {
  isShown: [TIMESERIES, USA_GDP],
  isLoading: true,
  timeSeries: WEEKLY,
  data: {},
}

export default createReducer(dashboardInitialState, {
  [setDashboardData]: (state, action) => {
    return { ...state, data: action.payload }
  },
  [resetDashboard]: () => ({
    ...dashboardInitialState,
  }),
  [setLoadingValue]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [setTimeSeriesValue]: (state, action) => ({
    ...state,
    timeSeries: action.payload,
  }),
  [resetDisplay]: state => ({
    ...state,
    isShown: dashboardInitialState.isShown,
  }),
  [updateIsShown]: (state, action) => {
    let isShown = [...state.isShown]
    if (isShown.includes(action.payload)) {
      isShown = isShown.filter(display => display !== action.payload)
    } else {
      isShown.push(action.payload)
    }
    return { ...state, isShown }
  },
})
