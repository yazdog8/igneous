import { createAction } from "redux-starter-kit"
import {
  getWeeklyTimeSeries,
  getHourlyTimeSeries,
  getUsaGDP,
} from "../../../common/http/data/dashboard"

export const setDashboardData = createAction("DASHBOARD_SET_DATA")

export const resetDashboard = createAction("DASHBOARD_RESET")

export const setLoadingValue = createAction("DASHBOARD_SET_LOADING")

export const setTimeSeriesValue = createAction("DASHBOARD_SET_TIMESTAMP")

export const resetDisplay = createAction("DASHBOARD_RESET_IS_SHOWN")

export const updateIsShown = createAction("UPDATE_IS_SHOWN")

export const getTimestampValues = () => (dispatch, getState) => {
  dispatch(setLoadingValue(true))
  const timeSeries =
    getState().dashboard.timeSeries === "weekly"
      ? getWeeklyTimeSeries
      : getHourlyTimeSeries
  const fetchData = [getUsaGDP(), timeSeries()]
  Promise.all(fetchData).then(response => {
    dispatch(setDashboardData(Object.assign({}, ...response)))
    dispatch(setLoadingValue(false))
    dispatch(resetDisplay())
  })
}
