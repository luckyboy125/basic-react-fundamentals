//material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    left: {
      padding: "50px",
      minHeight: "100vh",
      width: "50%",
      textAlign: "center",
      background: theme.palette.background.default,
    },
    topBtn: {
      margin: "auto",
    },
    right: {
      padding: "50px",
      minHeight: "100vh",
      textAlign: "center",
      width: "50%",
      background: theme.palette.background.paper,
    },
  })
);
