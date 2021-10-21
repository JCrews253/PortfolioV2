import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ColorModeContext } from "../App";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  setOpen?: () => void;
}

const CustomAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.primary.dark,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBar = ({ open, setOpen }: AppBarProps) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <CustomAppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          onClick={setOpen}
          edge="start"
          sx={{
            marginRight: "18px",
            ...(open && { display: "none" }),
          }}
          disableRipple
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            cursor: "pointer",
            padding: "5px 5px 5px 0px",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          James Crews
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
          disableRipple
        >
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </CustomAppBar>
  );
};

export default AppBar;
