import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export { darkTheme, lightTheme };
