import React from "react";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import NavMenu from "./NavMenu";

const NavDrawer = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose}>
    <NavMenu onClose={onClose} />
  </Drawer>
);

NavDrawer.defaultProps = {
  open: false,
};

NavDrawer.propTypes = {
  open: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default NavDrawer;
