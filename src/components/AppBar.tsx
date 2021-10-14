import { AppBar as MuiAppBar } from "@mui/material/";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavigationDrawer from "./Navigation/NavigationDrawer";

const AppBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <MuiAppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setShowMenu(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              James Crews
            </Typography>
          </Toolbar>
        </MuiAppBar>
      </Box>
      <NavigationDrawer
        open={showMenu}
        onOpen={() => setShowMenu(true)}
        onClose={() => setShowMenu(false)}
      />
    </>
  );
};

export default AppBar;
