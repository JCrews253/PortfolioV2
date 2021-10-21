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
import GitTree from "./components/GitTree";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", overflowX: "hidden" }}>
          <AppBar open={open} setOpen={() => setOpen(true)} />
          <Drawer open={open} setOpen={setOpen} />
          <GitTree />
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
            />
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
