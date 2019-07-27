import React, { memo } from "react"
import PropTypes from "prop-types"
import { Line } from "react-chartjs-2"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const LineChart = ({ lineData, labels, title }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: `${title} dataset`,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: lineData,
      },
    ],
  }

  return (
    <Paper style={{ padding: 20, marginBottom: 20 }}>
      <Typography variant="h5" component="h3">
        {title}
      </Typography>
      <Line data={data} />
    </Paper>
  )
}

LineChart.propTypes = {
  lineData: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default memo(LineChart)
