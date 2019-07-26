import { createReducer } from "redux-starter-kit"
import { setDashboardValue, setLoadingValue } from "./dashboardActions"

const dashboardInitialState = {
  isLoading: true,
  data: {},
}

export default createReducer(dashboardInitialState, {
  [setDashboardValue]: (state, action) => ({ ...state, data: action.payload }),
  [setLoadingValue]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
})
