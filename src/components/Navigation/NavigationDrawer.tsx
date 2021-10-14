import { Box, List, SwipeableDrawer } from "@mui/material";
import React from "react";
import DrawerItem from "./DrawerItem";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import ContactPageIcon from "@mui/icons-material/ContactPage";

interface NavigationDrawerProps {
  open: boolean;
  onClose(): void;
  onOpen(): void;
}

const NavigationDrawer = ({ open, onClose, onOpen }: NavigationDrawerProps) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Box
        sx={{
          width: 250,
        }}
      >
        <List>
          <DrawerItem title="About" Icon={<InfoIcon />} onClick={onClose} />
          <DrawerItem
            title="Work Experience"
            Icon={<WorkIcon />}
            onClick={onClose}
          />
          <DrawerItem
            title="Personal Projects"
            Icon={<CodeIcon />}
            onClick={onClose}
          />
          <DrawerItem
            title="Education"
            Icon={<SchoolIcon />}
            onClick={onClose}
          />
          <DrawerItem
            title="Contact"
            Icon={<ContactPageIcon />}
            onClick={onClose}
          />
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default NavigationDrawer;
