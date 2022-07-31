import React from "react";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";


const NavItem = ({ text, icon, link, itemkey }) => (
  <ListItem key={text} disablePadding>
    <Link className="nav-menu-link" to={link}>
      <ListItemButton>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={text} />
      </ListItemButton>
    </Link>
  </ListItem>
);

NavItem.defaultProps = {
  itemkey: undefined,
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  link: PropTypes.string.isRequired,
  itemkey: PropTypes.string,
};

export default NavItem;
