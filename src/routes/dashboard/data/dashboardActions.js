import { createAction } from "redux-starter-kit"
import {
  getWeeklyTimeSeries,
  getHourlyTimeSeries,
  getUsaGDP,
} from "../../../common/http/data/dashboard"

export const setDashboardValue = createAction("DASHBOARD_SET_VALUE")

export const setLoadingValue = createAction("DASHBOARD_SET_LOADING")

export const getTimestampValues = () => dispatch => {
  Promise.all([getWeeklyTimeSeries(), getHourlyTimeSeries(), getUsaGDP()]).then(
    response => {
      console.log(response)
      dispatch(setLoadingValue(false))
    }
  )
}
