import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { themeCreator } from "./base";

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

interface themeProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: themeProps) {
  // Read current theme from localStorage or maybe from an api
  const curThemeName = localStorage.getItem("appTheme") || "lightTheme";

  if (localStorage.getItem("appTheme") === null) {
    localStorage.setItem("appTheme", "lightTheme");
  }

  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(curThemeName);

  // Get the theme object by theme name
  const theme = themeCreator(themeName);

  const setThemeName = (themeName: string): void => {
    localStorage.setItem("appTheme", themeName);
    _setThemeName(themeName);
  };

  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
