import React from "react";
import PropTypes from "prop-types";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PetsIcon from "@mui/icons-material/Pets";
import SnowmobileIcon from "@mui/icons-material/Snowmobile";
import PeopleIcon from "@mui/icons-material/People";
import Box from "@mui/material/Box";
import { List, ListItemText } from "@mui/material";
import NavItem from "./NavItem";

import "./NavMenu.scss";

const MenuItems = [
  {
    text: "Planets",
    link: "/planets",
    icon: <InboxIcon />,
  },
  {
    text: "Species",
    link: "/species",
    icon: <PetsIcon />,
  },
  {
    text: "Vehicles",
    link: "/vehicles",
    icon: <SnowmobileIcon />,
  },
  {
    text: "People",
    link: "/people",
    icon: <PeopleIcon />,
  },
];

const NavMenu = ({ onClose }) => (
  <Box
    className="nav-menu-box"
    role="presentation"
    onClick={onClose}
    onKeyDown={onClose}
  >
    <List>
      <NavItem text={"GalaxyNet"} link="/"/>
      { MenuItems.map(({ text, link, icon }) => (
          <NavItem text={text} icon={icon} itemkey={text} link={link} />
      )) }
    </List>
  </Box>
);

NavMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NavMenu;
