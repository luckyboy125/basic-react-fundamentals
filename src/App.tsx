import React, { useState } from "react";
import "./App.css";
import { useStyles } from "./Style";
import { ThemeContext } from "./theme/ThemeProvider";

function App() {
  const classes = useStyles();
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

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div onClick={handleToggle}> theme convert</div>
      </div>
      <div className={classes.right}>right part</div>
    </div>
  );
}

export default App;
