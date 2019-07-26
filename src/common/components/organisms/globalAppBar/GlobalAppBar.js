import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { withRouter } from "react-router-dom"
import { DEFAULT, DASHBOARD } from "../../../constants/routingConstants"

const GlobalAppBar = ({ history }) => {
  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant="h6"
          style={{ marginRight: 30 }}
          onClick={() => history.push(DEFAULT)}
        >
          Igneous Demo
        </Typography>
        <Button color="inherit" onClick={() => history.push(DASHBOARD)}>
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  )
}

GlobalAppBar.propTypes = {
  history: PropTypes.object,
}

export default withRouter(GlobalAppBar)
