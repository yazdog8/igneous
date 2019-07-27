import moment from "moment"
export const returnChartData = (data = []) => {
  var chartData = data.reduce((accum, val) => {
    Object.assign(accum, val)
    return accum
  }, {})

  return {
    lineSeriesData: Object.values(chartData),
    labels: Object.keys(chartData).map(time =>
      moment(time).format("dd, MMM Do YYYY, h:mm:ss")
    ),
  }
}
