import React, { memo, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getTimestampValues, resetDashboard } from "./data/dashboardActions"
import GlobalAppTemplate from "../../common/components/templates/globalAppTemplate/GlobalAppTemplate"
import Loading from "../../common/components/atoms/loading/Loading"
import styles from "./dashboard.module.scss"

const Dashboard = ({
  isLoading,
  data,
  actions: { getTimestampValues, resetDashboard },
}) => {
  console.log(data)
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
        <h1>Dashboard</h1>
      </div>
    </GlobalAppTemplate>
  )
}

Dashboard.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object,
  timeSeries: PropTypes.string,
  actions: PropTypes.objectOf(PropTypes.func),
}

const mapStateToProps = state => {
  const dashboard = state.dashboard
  return {
    isLoading: dashboard.isLoading,
    data: dashboard.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      { getTimestampValues, resetDashboard },
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
