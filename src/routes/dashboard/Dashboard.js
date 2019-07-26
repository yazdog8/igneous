import React, { memo, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getTimestampValues } from "./data/dashboardActions"
import GlobalAppTemplate from "../../common/components/templates/globalAppTemplate/GlobalAppTemplate"

const Dashboard = ({ isLoading, actions: { getTimestampValues } }) => {
  useEffect(() => {
    getTimestampValues()
  }, [getTimestampValues])
  return (
    <GlobalAppTemplate>
      {isLoading && <>Loading</>}
      <h1>Dashboard</h1>
    </GlobalAppTemplate>
  )
}

Dashboard.propTypes = {
  isLoading: PropTypes.bool,
  actions: PropTypes.objectOf(PropTypes.func),
}

const mapStateToProps = state => {
  const dashboard = state.dashboard
  return {
    isLoading: dashboard.isLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ getTimestampValues }, dispatch),
  }
}

export default memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
)
