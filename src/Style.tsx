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
    firstPart: {
      padding: "0 0 50px 0",
    },
    topBtn: {
      margin: "auto",
    },
    secondPart: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "end",
    },
    descriptionTextField: {
      boxSizing: "border-box",
      width: "100%",
      display: "flex",
      alignContent: "center",
      padding: "10px",
      border: "1px solid #000",
      borderRadius: "20px",
      background: theme.palette.background.default,
      color: theme.palette.primary.light,
      alignItems: "center",
      paddingLeft: "18px",
      fontFamily: "Montserrat",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
      minHeight: "100px",
      resize: "none",
      verticalAlign: "Top",
      "&:focus-visible": {
        outline: "none",
      },
      "&::placeholder": {
        opacity: 1 /* Firefox */,
        fontFamily: "Montserrat",
        fontSize: "16px",
        lineHeight: "19px",
        color: "#70708F",
      },
    },
    sendBtn: {
      marginTop: "10px",
    },
    thirdPart: {
      display: "flex",
      alignItems: "center",
      padding: "50px 0",
      flexFlow: "wrap",
    },
    increaseBtn: {
      margin: "5px 0 0 5px",
    },
    right: {
      padding: "50px",
      minHeight: "100vh",
      textAlign: "center",
      width: "50%",
      background: theme.palette.background.paper,
    },
    item: {
      padding: "10px",
      display: "flex",
      alignItems: "center",
    },
    msgDate: {
      width: "150px",
      fontFamily: "Montserrat",
      fontWeight: "normal",
      fontSize: "16px",
      color: theme.palette.primary.contrastText,
    },
    msgDes: {
      flexGrow: 1,
      fontFamily: "Montserrat",
      fontWeight: "normal",
      fontSize: "16px",
      marginLeft: "10px",
      textAlign: "start",
      color: theme.palette.primary.contrastText,
    },
  })
);
