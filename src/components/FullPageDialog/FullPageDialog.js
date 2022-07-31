import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
  DialogContent,
} from "@mui/material";
import SlideUpTransition from "./SlideUpTransition";
import NoContent from "../NoContent";

const FullPageDialog = ({ open, title, onClose, children }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={SlideUpTransition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

FullPageDialog.defaultProps = {
  open: false,
  children: <NoContent />,
};

FullPageDialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.bool.isRequired,
  onClose: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

export default FullPageDialog;
