import React from "react"
import GlobalAppTemplate from "../../common/components/templates/globalAppTemplate/GlobalAppTemplate"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import { DASHBOARD } from "../../common/constants/routingConstants"
import styles from "./welcome.module.scss"

const Welcome = () => {
  const ButtonLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} {...props} />
  ))
  return (
    <GlobalAppTemplate>
      <div className={styles["welcome-container"]}>
        <div>
          <Card className={styles["card"]} elevation={10}>
            <CardContent>
              <Typography variant="h4" component="h3">
                Welcome to the demo!
              </Typography>
              <Typography component="p">
                Click the button to see the dashboard.
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={ButtonLink} to={DASHBOARD}>
                On to the Dashboard
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </GlobalAppTemplate>
  )
}

export default Welcome
