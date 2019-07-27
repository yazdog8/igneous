import { createAction } from "redux-starter-kit"
import {
  getWeeklyTimeSeries,
  getHourlyTimeSeries,
  getUsaGDP,
} from "../../../common/http/data/dashboard"

export const setDashboardData = createAction("DASHBOARD_SET_DATA")

export const resetDashboard = createAction("DASHBOARD_RESET")

export const setLoadingValue = createAction("DASHBOARD_SET_LOADING")

export const getTimestampValues = () => dispatch => {
  Promise.all([getWeeklyTimeSeries(), getHourlyTimeSeries(), getUsaGDP()]).then(
    response => {
      dispatch(setDashboardData(Object.assign({}, ...response)))
      dispatch(setLoadingValue(false))
    }
  )
}
