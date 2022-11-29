import React, { useState } from "react";
import "./App.css";
import ActionButton from "./component/ActionButton/ActionButton";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useStyles } from "./Style";
import { ThemeContext } from "./theme/ThemeProvider";

function App() {
  const classes = useStyles();
  const [des, setDes] = useState("");
  const buttonArray = [0, 1, 2, 3, 4];

  const darkTheme = "darkTheme";
  const lightTheme = "lightTheme";
  const curThemeName = localStorage.getItem("appTheme") || "darkTheme";
  const setThemeName = React.useContext(ThemeContext);
  const [theme, setTheme] = useState(curThemeName);
  const handleToggle = () => {
    if (theme === lightTheme) {
      setThemeName(darkTheme);
      setTheme(darkTheme);
    } else {
      setThemeName(lightTheme);
      setTheme(lightTheme);
    }
  };

  const handleDes = (e: any) => {
    setDes(e.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.firstPart}>
          <ActionButton
            action={handleToggle}
            content="Toggle Theme"
            className={classes.topBtn}
          />
        </div>
        <div className={classes.secondPart}>
          <textarea
            className={classes.descriptionTextField}
            aria-label="maximum height"
            placeholder="Some Description"
            onChange={(e) => {
              handleDes(e);
            }}
          />
          <ActionButton
            action={handleToggle}
            content="Send"
            className={classes.sendBtn}
          />
        </div>
        <div className={classes.thirdPart}>
          {buttonArray.map((item) => {
            return (
              <ActionButton
                action={handleToggle}
                content={`Button ${item.toString()}`}
                className={classes.increaseBtn}
              />
            );
          })}
        </div>
      </div>
      <div className={classes.right}>right part</div>
    </div>
  );
}

export default App;
