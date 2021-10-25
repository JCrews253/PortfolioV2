import { styled, Theme, CSSObject } from "@mui/material/styles";
import {
  Box,
  Collapse,
  Drawer as MuiDrawer,
  ListItemButton,
} from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faLaptopCode,
  faChessKing,
} from "@fortawesome/free-solid-svg-icons";
import {
  ExpandLess,
  ExpandMore,
  BarChart,
  Fastfood,
  GridOn,
  HomeWork,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import SelLogo from "../Icons/SelLogo";
import { BranchContext } from "../App";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface DrawerProps {
  open: boolean;
  setOpen: (state: boolean) => void;
}

const Drawer = ({ open, setOpen }: DrawerProps) => {
  const [openBranches, setOpenBranches] = useState(false);
  const [openWork, setOpenWork] = useState(true);
  const [openProjects, setOpenProjects] = useState(true);
  const { setBranch } = useContext(BranchContext);
  const handleClick = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <StyledDrawer
      variant="permanent"
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: (theme) => theme.palette.background.paper,
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={() => setOpen(false)} disableRipple>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem
          button
          key="About"
          disableRipple
          onClick={() => handleClick("about")}
        >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" sx={{ ml: -1 }} />
        </ListItem>
        <ListItem
          button
          key="Work"
          disableRipple
          onClick={() => handleClick("work")}
        >
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Work Expierence" sx={{ ml: -1 }} />
        </ListItem>
        <ListItem
          button
          key="Projects"
          disableRipple
          onClick={() => handleClick("projects")}
        >
          <ListItemIcon sx={{ pl: "3px" }}>
            <FontAwesomeIcon icon={faLaptopCode} />
          </ListItemIcon>
          <ListItemText primary="Personal Projects" sx={{ ml: -1 }} />
        </ListItem>
        <ListItem
          button
          key="Education"
          disableRipple
          onClick={() => handleClick("education")}
        >
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Education" sx={{ ml: -1 }} />
        </ListItem>
        <ListItem
          button
          key="Contact"
          disableRipple
          onClick={() => handleClick("contact")}
        >
          <ListItemIcon>
            <ContactPageIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" sx={{ ml: -1 }} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItemButton
          onClick={() => {
            if (open) {
              setOpenBranches(!openBranches);
            } else {
              setOpen(true);
              setOpenBranches(true);
            }
          }}
          disableRipple
        >
          <ListItemIcon sx={{ pl: "3px" }}>
            <FontAwesomeIcon
              icon={faCodeBranch}
              style={{ width: "20px", height: "20px" }}
            />
          </ListItemIcon>
          <ListItemText primary="Branches" sx={{ ml: -1 }} />
          {openBranches ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openBranches && open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onClick={() => setOpenWork(!openWork)}
              sx={{ pl: 4 }}
              disableRipple
            >
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Work" sx={{ ml: -1 }} />
              {openWork ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openWork} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 7 }}
                  disableRipple
                  onClick={() => setBranch("sel")}
                >
                  <ListItemIcon>
                    <Box
                      sx={{
                        width: "35px",
                        height: "20px",
                        ml: "-4px",
                        fill: (theme) => theme.palette.text.primary,
                        opacity: 0.7,
                      }}
                    >
                      <SelLogo />
                    </Box>
                  </ListItemIcon>
                  <ListItemText primary="SEL" sx={{ ml: -1 }} />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 7 }}
                  disableRipple
                  onClick={() => setBranch("psi")}
                >
                  <ListItemIcon>
                    <HomeWork />
                  </ListItemIcon>
                  <ListItemText primary="PSI" sx={{ ml: -1 }} />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton
              onClick={() => setOpenProjects(!openProjects)}
              sx={{ pl: 4 }}
              disableRipple
            >
              <ListItemIcon
                sx={{
                  pl: "3px",
                }}
              >
                <FontAwesomeIcon icon={faLaptopCode} />
              </ListItemIcon>
              <ListItemText primary="Projects" sx={{ ml: -1 }} />
              {openProjects ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openProjects} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 7 }}
                  disableRipple
                  onClick={() => setBranch("recipe")}
                >
                  <ListItemIcon>
                    <Fastfood />
                  </ListItemIcon>
                  <ListItemText primary="Recipe App" sx={{ ml: -1 }} />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 7 }}
                  disableRipple
                  onClick={() => setBranch("chess")}
                >
                  <ListItemIcon sx={{ pl: "2px" }}>
                    <FontAwesomeIcon
                      icon={faChessKing}
                      style={{ width: "20px", height: "20px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Chess AI" sx={{ ml: -1 }} />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 7 }}
                  disableRipple
                  onClick={() => setBranch("pathFinding")}
                >
                  <ListItemIcon>
                    <GridOn />
                  </ListItemIcon>
                  <ListItemText primary="Path Finding" sx={{ ml: -1 }} />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 7 }}
                  disableRipple
                  onClick={() => setBranch("sorting")}
                >
                  <ListItemIcon>
                    <BarChart />
                  </ListItemIcon>
                  <ListItemText primary="Sorting" sx={{ ml: -1 }} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
    </StyledDrawer>
  );
};

export default Drawer;
