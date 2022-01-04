import { PaletteMode } from "@mui/material";
import { branch } from "./branches/Branch";

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

export const ColorSelector = (branch: branch) => {
  switch (branch) {
    case "sel":
      return "#162D71";
    case "psi":
      return "#64B4C9";
    case "zest":
      return "#49BF81";
    case "vinyl":
      return "#A27DE9";
    case "chess":
      return "#4C566A";
    case "pathFinding":
      return "#EA00D7";
    case "sorting":
      return "#00F6FF";
    case "wsu":
      return "#981E32";
    case "grc":
      return "#2C882B";
    case "github":
      return "#161B22";
    case "linkedIn":
      return "#0A66C2";
    case "resume":
      return "#FA0F00";
    case "email":
      return "#27A3E3";
    default:
      return "red";
  }
};

export const ColorSelectorDark = (branch: branch) => {
  switch (branch) {
    case "sel":
      return "#070E24";
    case "psi":
      return "#3D6F7C";
    case "zest":
      return "#015427";
    case "vinyl":
      return "#6C539C";
    case "chess":
      return "#2E3440";
    case "pathFinding":
      return "#9D0090";
    case "sorting":
      return "#00ACB2";
    case "wsu":
      return "#651321";
    case "grc":
      return "#1F611D";
    case "github":
      return "#0D1117";
    case "linkedIn":
      return "#05386B";
    case "resume":
      return "#AD0A00";
    case "email":
      return "#0074CD";
    default:
      return "red";
  }
};
