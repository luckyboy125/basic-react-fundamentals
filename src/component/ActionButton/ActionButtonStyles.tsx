import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const ActionButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: "pointer",
      display: "flex",
      flexWrap: "nowrap",
      width: "fit-content",
      justifyContent: "center",
      alignItems: "center",
      background: theme.palette.primary.main,
      borderRadius: "10px",
      boxShadow: "5px 5px 10px rgb(0 0 0 / 20%)",
      transitionDelay: "0ms",
      transitionDuration: "600ms",
      padding: "10px 15px",
      "& i": {
        marginLeft: "5px",
        fontSize: "13px",
        lineHeight: "16px",
        color: theme.palette.primary.dark,
      },
      "&:hover": {
        boxShadow: "0px 0px 0px rgb(0 0 0 / 20%)",
        "& i": {
          marginLeft: "10px",
          transitionDelay: "0ms",
          transitionDuration: "600ms",
        },
      },
      [theme.breakpoints.down(540)]: {
        padding: "12px 24px",
        "& p": {
          fontSize: "12px",
        },
      },
      [theme.breakpoints.down(400)]: {
        padding: "8px 10px",
        "& p": {
          fontSize: "10px",
        },
      },
    },
    des: {
      color: theme.palette.primary.dark,
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "0.05em",
      lineHeight: "1.9",
      margin: 0,
      wordBreak: "keep-all",
    },
    disable: {
      opacity: 0.7,
      cursor: "no-drop",
      "&:hover": {
        boxShadow: "5px 5px 10px rgb(0 0 0 / 20%) !important",
        transform: "translate(0px, 0px) !important",
      },
    },
    noDisable: {
      opacity: 1,
    },
  })
);
