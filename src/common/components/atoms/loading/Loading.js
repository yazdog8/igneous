import React from "react"
import CircularProgress from "@material-ui/core/CircularProgress"
import styles from "./loading.module.scss"

const Loading = () => {
  return (
    <div className={styles["loading-container"]}>
      <CircularProgress size={100} />
    </div>
  )
}

export default Loading
