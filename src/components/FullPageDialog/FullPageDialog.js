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

import './FullPageDialog.scss';

const FullPageDialog = ({ open, title, onClose, children }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={SlideUpTransition}
    >
      <AppBar className="fullpage-dialog-appbar">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography className="fullpage-dialog-title" variant="h6" component="div">
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
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default FullPageDialog;
