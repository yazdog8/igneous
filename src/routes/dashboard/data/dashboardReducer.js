import { createReducer } from "redux-starter-kit"
import {
  setDashboardData,
  setLoadingValue,
  resetDashboardData,
} from "./dashboardActions"

const dashboardInitialState = {
  isLoading: true,
  data: {},
}

export default createReducer(dashboardInitialState, {
  [setDashboardData]: (state, action) => ({ ...state, data: action.payload }),
  [resetDashboardData]: (state, action) => ({
    ...state,
    data: dashboardInitialState.data,
  }),
  [setLoadingValue]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
})
