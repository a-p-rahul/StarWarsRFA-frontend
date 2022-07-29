import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const NavItem = ({ text, icon, key }) => (
  <ListItem key={key} disablePadding>
    <ListItemButton>
      {
        icon && (
          <ListItemIcon>
            {icon}
          </ListItemIcon>
        )
      }
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
);

NavItem.defaultProps = {
  key: undefined,
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  key: PropTypes.string,
};

export default NavItem;