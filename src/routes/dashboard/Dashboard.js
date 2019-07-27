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
  setTimeSeriesValue,
  updateIsShown,
} from "./data/dashboardActions"
import { TIMESERIES, USA_GDP, HOURLY, WEEKLY } from "./data/dashboardConstants"
import GlobalAppTemplate from "../../common/components/templates/globalAppTemplate/GlobalAppTemplate"
import Loading from "../../common/components/atoms/loading/Loading"
import styles from "./dashboard.module.scss"

const Dashboard = ({
  isLoading,
  isShown,
  data,
  actions: { getTimestampValues, resetDashboard, updateIsShown },
}) => {
  useEffect(() => {
    getTimestampValues()

    return () => {
      resetDashboard()
    }
  }, [getTimestampValues, resetDashboard])
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
                  checked={isShown.includes(TIMESERIES)}
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
                  checked={isShown.includes(USA_GDP)}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={USA_GDP} />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <div className={styles["dashboard-content"]}>Foo</div>
      </div>
    </GlobalAppTemplate>
  )
}

Dashboard.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object,
  isShown: PropTypes.arrayOf(PropTypes.string),
  actions: PropTypes.objectOf(PropTypes.func),
}

const mapStateToProps = state => {
  const dashboard = state.dashboard
  return {
    isLoading: dashboard.isLoading,
    data: dashboard.data,
    isShown: dashboard.isShown,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      { getTimestampValues, resetDashboard, setTimeSeriesValue, updateIsShown },
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
