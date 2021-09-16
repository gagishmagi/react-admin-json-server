import { defaultTheme } from "react-admin";
import createMuiTheme from "@material-ui/core/styles/createTheme";
import merge from "lodash/merge";

export const theme = createMuiTheme(
  merge({}, defaultTheme, {
    palette: {
        secondary: {
            main: "#ff9800", // Not far from orange
          },
    },
  })
);
