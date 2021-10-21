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
  | "GRC"
  | "Github"
  | "LinkedIn"
  | "Resume"
  | "Email";

export const ColorSelector = (color: Color) => {
  switch (color) {
    case "SEL":
      return "#162D71";
    case "PSI":
      return "#64B4C9";
    case "Recipe":
      return "#162D71";
    case "ChessAI":
      return "#4C566A";
    case "PathFinding":
      return "#EA00D7";
    case "Sorting":
      return "#00F6FF";
    case "WSU":
      return "#981E32";
    case "GRC":
      return "#2C882B";
    case "Github":
      return "#161B22";
    case "LinkedIn":
      return "#0A66C2";
    case "Resume":
      return "#FA0F00";
    case "Email":
      return "#27A3E3";
    default:
      return "red";
  }
};

export const ColorSelectorDark = (color: Color) => {
  switch (color) {
    case "SEL":
      return "#070E24";
    case "PSI":
      return "#3D6F7C";
    case "Recipe":
      return "#070E24";
    case "ChessAI":
      return "#2E3440";
    case "PathFinding":
      return "#9D0090";
    case "Sorting":
      return "#00ACB2";
    case "WSU":
      return "#651321";
    case "GRC":
      return "#1F611D";
    case "Github":
      return "#0D1117";
    case "LinkedIn":
      return "#05386B";
    case "Resume":
      return "#AD0A00";
    case "Email":
      return "#0074CD";
    default:
      return "red";
  }
};
