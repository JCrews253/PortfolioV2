import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const getThemePalette = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#7289da",
          },
          secondary: {
            main: "#da727e",
          },
        }
      : {
          primary: {
            main: "#7289da",
          },
          secondary: {
            main: "#da727e",
          },
          background: {
            default: "#36393f",
            paper: "#202225",
          },
          text: {
            primary: "#FFFFFF",
          },
        }),
  },
});

export type Color =
  | "SEL"
  | "PSI"
  | "Recipe"
  | "ChessAI"
  | "PathFinding"
  | "Sorting"
  | "WSU"
  | "GRC";

export const ColorSelector = (color: Color) => {
  switch (color) {
    case "SEL":
      return "#162D71";
    case "PSI":
      return "#162D71";
    case "Recipe":
      return "#162D71";
    case "ChessAI":
      return "#162D71";
    case "PathFinding":
      return "#162D71";
    case "Sorting":
      return "#162D71";
    case "WSU":
      return "#162D71";
    case "GRC":
      return "#162D71";
    default:
      return "red";
  }
};

export const ColorSelectorDark = (color: Color) => {
  switch (color) {
    case "SEL":
      return "#070E24";
    case "PSI":
      return "#162D71";
    case "Recipe":
      return "#162D71";
    case "ChessAI":
      return "#162D71";
    case "PathFinding":
      return "#162D71";
    case "Sorting":
      return "#162D71";
    case "WSU":
      return "#162D71";
    case "GRC":
      return "#162D71";
    default:
      return "red";
  }
};
