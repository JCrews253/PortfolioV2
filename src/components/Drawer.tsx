import {
  Box,
  Collapse,
  Drawer as MuiDrawer,
  ListItemButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  styled,
  Theme,
  CSSObject,
} from "@mui/material";
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
  Home,
  Info,
  Work,
  School,
  ContactPage,
  ChevronLeft,
  Album,
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
  const { branch, setBranch } = useContext(BranchContext);
  const handleClick = (elementId: string) => {
    if (branch !== "main") {
      setBranch("main");
      setTimeout(() => {
        document
          .getElementById(elementId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 1);
    } else {
      document
        .getElementById(elementId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
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
          <ChevronLeft />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem
          button
          key="Home"
          disableRipple
          onClick={() => {
            if (branch === "main") {
              handleClick("head");
            } else {
              setBranch("main");
            }
          }}
        >
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" sx={{ ml: -1 }} />
        </ListItem>
        <ListItem
          button
          key="About"
          disableRipple
          onClick={() => handleClick("about")}
        >
          <ListItemIcon>
            <Info />
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
            <Work />
          </ListItemIcon>
          <ListItemText primary="Work Experience" sx={{ ml: -1 }} />
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
            <School />
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
            <ContactPage />
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
                <Work />
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
                        fill: (theme: Theme) => theme.palette.text.primary,
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
                  onClick={() => setBranch("zest")}
                >
                  <ListItemIcon>
                    <Fastfood />
                  </ListItemIcon>
                  <ListItemText primary="Zest" sx={{ ml: -1 }} />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 7 }}
                  disableRipple
                  onClick={() => setBranch("vinyl")}
                >
                  <ListItemIcon sx={{ pl: "2px" }}>
                    <Album />
                  </ListItemIcon>
                  <ListItemText primary="Vinyl Bot" sx={{ ml: -1 }} />
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
