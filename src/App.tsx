import { Work } from "@mui/icons-material";
import { ThemeProvider, Box, PaletteMode, createTheme } from "@mui/material";
import AppBar from "./components/AppBar";
import CommitNode from "./components/CommitNode";
import GitGraph from "./components/GitGraph";
import { getThemePalette } from "./Theme";
import ProfilePicture from "./Images/profile-picture.jpg";
import Commit from "./components/Commit";
import Drawer from "./components/Drawer";
import { createContext, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

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
        <Box sx={{ display: "flex" }}>
          <AppBar open={open} setOpen={() => setOpen(true)} />
          <Drawer open={open} setOpen={setOpen} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "50px",
              marginTop: "64px",
              width: "100%",
              backgroundColor: (theme) => theme.palette.background.default,
            }}
          >
            <Commit size="lg" image={ProfilePicture} title="Work Experience" />
            <Commit
              Icon={Work}
              title="Work Experience"
              content="Content"
              subContent="SubContent"
              date="date"
            />
            <Commit Icon={Work} />
            <Commit Icon={Work} color="SEL" isBranch link="asdfas" />
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
