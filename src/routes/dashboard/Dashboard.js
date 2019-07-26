import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import GlobalAppTemplate from "../../common/components/templates/globalAppTemplate/GlobalAppTemplate"

const Dashboard = props => {
  return (
    <GlobalAppTemplate>
      <h1>Dashboard</h1>
    </GlobalAppTemplate>
  )
}

Dashboard.propTypes = {}

export default Dashboard
