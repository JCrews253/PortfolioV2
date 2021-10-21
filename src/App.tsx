import { ThemeProvider, Box, PaletteMode, createTheme } from "@mui/material";
import AppBar from "./components/AppBar";
import { getThemePalette } from "./Theme";
import Drawer from "./components/Drawer";
import { createContext, useMemo, useState } from "react";
import BranchesLeftDark from "./Images/branchesLeftDark.png";
import BranchesLeftLight from "./Images/branchesLeftLight.png";
import BranchesRightDark from "./Images/branchesRightDark.png";
import BranchesRightLight from "./Images/branchesRightLight.png";
import "./index.css";
import MainBranch from "./branches/MainBranch";
import SortingVisualization from "./branches/SortingVisualization";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const BranchContext = createContext({
  branch: "",
  setBranch: (branch: branches) => {},
});

export type branches =
  | "main"
  | "sel"
  | "psi"
  | "grc"
  | "recipe"
  | "chess"
  | "pathfinding"
  | "sorting";

function App() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<PaletteMode>("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(getThemePalette(mode)), [mode]);
  const [branch, setBranch] = useState<branches>("main");
  const branchValue = useMemo(
    () => ({
      branch,
      setBranch,
    }),
    [branch]
  );

  const getBranch = () => {
    switch (branch) {
      case "main":
        return <MainBranch />;
      case "sorting":
        return <SortingVisualization />;
      default:
        return <MainBranch />;
    }
  };

  return (
    <BranchContext.Provider value={branchValue}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              overflowX: "hidden",
              height: "100%",
              backgroundColor: (theme) => theme.palette.background.default,
            }}
          >
            <AppBar open={open} setOpen={() => setOpen(true)} />
            <Drawer open={open} setOpen={setOpen} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "50px",
                marginTop: "64px",
                width: "100%",
                minWidth: "800px",
                overflowX: "hidden",
                backgroundColor: (theme) => theme.palette.background.default,
              }}
            >
              {getBranch()}
            </Box>
            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 0.05,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                src={
                  theme.palette.mode === "dark"
                    ? BranchesLeftDark
                    : BranchesLeftLight
                }
                alt=""
              />
              <img
                src={
                  theme.palette.mode === "dark"
                    ? BranchesRightDark
                    : BranchesRightLight
                }
                style={{
                  paddingLeft: "20px",
                }}
                alt=""
              />
            </Box>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BranchContext.Provider>
  );
}

export default App;
