import React from "react"
import PropTypes from "prop-types"
import GlobalAppBar from "../../organisms/globalAppBar/GlobalAppBar"
import styles from "./globalAppTemplate.module.scss"

const GlobalAppTemplate = ({ children }) => {
  return (
    <div className={styles["global-app"]}>
      <GlobalAppBar />
      <div className={styles["global-app-container"]}>{children}</div>
    </div>
  )
}

GlobalAppTemplate.propTypes = {
  children: PropTypes.node,
}

export default GlobalAppTemplate
