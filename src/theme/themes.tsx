import { createTheme } from "@material-ui/core";

const lightTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "#cecece", //background left part
      paper: "white", //background right part
    },
    primary: {
      main: "#cc0000", //the button background
      dark: "white", //the button text
      light: "#2f4f4f", //any text in left part
      contrastText: "#000000", //any text in right part
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: "light",
    background: {
      default: "white", //background left part
      paper: "#008080", //background right part
    },
    primary: {
      main: "#f0f8ff", //the button background
      dark: "#800080", //the button text
      light: "#696969", //any text in left part
      contrastText: "white", //any text in right part
    },
  },
});

export { lightTheme, darkTheme };
