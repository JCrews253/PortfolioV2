import { ThemeProvider, Box, PaletteMode, createTheme } from "@mui/material";
import AppBar from "./components/AppBar";
import { getThemePalette } from "./Theme";
import Drawer from "./components/Drawer";
import { createContext, useEffect, useMemo, useState } from "react";
import BranchesLeftDark from "./Images/branchesLeftDark.png";
import BranchesLeftLight from "./Images/branchesLeftLight.png";
import BranchesRightDark from "./Images/branchesRightDark.png";
import BranchesRightLight from "./Images/branchesRightLight.png";
import "./index.css";
import MainBranch from "./branches/MainBranch";
import SortingVisualizationBranch from "./branches/projects/SortingVisualizationBranch";
import PathFindingBranch from "./branches/projects/PathFindingBranch";
import ChessBranch from "./branches/projects/ChessBranch";
import SelBranch from "./branches/work/SelBranch";
import PsiBranch from "./branches/work/PsiBranch";
import ZestBranch from "./branches/projects/ZestBranch";
import { branch } from "./branches/Branch";
import VinylBranch from "./branches/projects/VinylBranch";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const BranchContext = createContext({
  branch: "",
  setBranch: (branch: branch) => {},
});

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
  const [branch, setBranch] = useState<branch>("main");
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
      case "sel":
        return <SelBranch />;
      case "psi":
        return <PsiBranch />;
      case "zest":
        return <ZestBranch />;
      case "vinyl":
        return <VinylBranch />;
      case "chess":
        return <ChessBranch />;
      case "pathFinding":
        return <PathFindingBranch />;
      case "sorting":
        return <SortingVisualizationBranch />;
      default:
        return <MainBranch />;
    }
  };

  useEffect(() => {
    document.getElementById("head")?.scrollIntoView({ behavior: "smooth" });
  }, [branch]);

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
                overflowX: "hidden",
                zIndex: 1,
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
                userSelect: "none",
                zIndex: 0,
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
