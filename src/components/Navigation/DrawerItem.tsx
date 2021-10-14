import {
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
} from "@mui/material";
import React from "react";

interface DrawerMenuItemProps {
  title: string;
  Icon: React.ReactElement<SvgIconProps>;
  onClick(): void;
}

const DrawerItem = ({ title, Icon, onClick }: DrawerMenuItemProps) => {
  return (
    <ListItem button key={title} onClick={onClick}>
      <ListItemIcon>{Icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default DrawerItem;
