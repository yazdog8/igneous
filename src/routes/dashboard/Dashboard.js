import React, { memo, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Checkbox from "@material-ui/core/Checkbox"
import Divider from "@material-ui/core/Divider"
import ListSubheader from "@material-ui/core/ListSubheader"
import {
  getTimestampValues,
  resetDashboard,
  setTimeSeries,
  updateIsShown,
} from "./data/dashboardActions"
import { TIMESERIES, USA_GDP, HOURLY, WEEKLY } from "./data/dashboardConstants"
import { returnChartData } from "./common/utils/dashboardUtils"
import GlobalAppTemplate from "../../common/components/templates/globalAppTemplate/GlobalAppTemplate"
import Loading from "../../common/components/atoms/loading/Loading"
import LineChart from "../../common/components/atoms/charts/lineChart/LineChart"
import styles from "./dashboard.module.scss"

const Dashboard = ({
  isLoading,
  isShown,
  timeSeries,
  data,
  actions: { getTimestampValues, resetDashboard, updateIsShown, setTimeSeries },
}) => {
  useEffect(() => {
    getTimestampValues()

    return () => {
      resetDashboard()
    }
  }, [getTimestampValues, resetDashboard])

  const hasTimeSeries = isShown.includes(TIMESERIES)
  const hasGDP = isShown.includes(USA_GDP)
  const timeSeriesChartData = returnChartData(data.cpuTimeSeries)
  const usaGdpChartData = returnChartData(data.usaGDP)
  return (
    <GlobalAppTemplate>
      <div className={styles["dashboard-container"]}>
        {isLoading && <Loading />}
        <Drawer
          className={styles["drawer"]}
          variant="permanent"
          classes={{
            paper: styles["drawer-paper"],
          }}
        >
          <div className={styles["drawer-spacer"]} />
          <List>
            <ListSubheader>Select item to display/hide</ListSubheader>
            <ListItem button onClick={() => updateIsShown(TIMESERIES)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={hasTimeSeries}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={TIMESERIES} />
            </ListItem>
            <ListItem button onClick={() => updateIsShown(USA_GDP)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={hasGDP}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={USA_GDP} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListSubheader>Select Time Series</ListSubheader>
            <ListItem button onClick={() => setTimeSeries(WEEKLY)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={timeSeries === WEEKLY}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={WEEKLY} />
            </ListItem>
            <ListItem button onClick={() => setTimeSeries(HOURLY)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={timeSeries === HOURLY}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={HOURLY} />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <div className={styles["dashboard-content"]}>
          {hasTimeSeries && !isLoading && (
            <LineChart
              lineData={timeSeriesChartData.lineSeriesData}
              labels={timeSeriesChartData.labels}
              title={`Time Series - ${timeSeries}`}
            />
          )}
          {hasGDP && !isLoading && (
            <LineChart
              lineData={usaGdpChartData.lineSeriesData}
              labels={usaGdpChartData.labels}
              title="USA GDP"
            />
          )}
        </div>
      </div>
    </GlobalAppTemplate>
  )
}

Dashboard.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object,
  isShown: PropTypes.arrayOf(PropTypes.string),
  timeSeries: PropTypes.string,
  actions: PropTypes.objectOf(PropTypes.func),
}

const mapStateToProps = state => {
  const dashboard = state.dashboard
  return {
    isLoading: dashboard.isLoading,
    data: dashboard.data,
    isShown: dashboard.isShown,
    timeSeries: dashboard.timeSeries,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      { getTimestampValues, resetDashboard, setTimeSeries, updateIsShown },
      dispatch
    ),
  }
}

export default memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
)
