import React from "react";
import PropTypes from 'prop-types';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PetsIcon from '@mui/icons-material/Pets';
import SnowmobileIcon from '@mui/icons-material/Snowmobile';
import PeopleIcon from '@mui/icons-material/People';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const MenuItems = [
  {
    text: 'Planets',
    link: '/planets',
    icon: <InboxIcon />
  },
  {
    text: 'Species',
    link: '/species',
    icon: <PetsIcon />
  },
  {
    text: 'Vehicles',
    link: '/vehicles',
    icon: <SnowmobileIcon />
  },
  {
    text: 'People',
    link: '/people',
    icon: <PeopleIcon />
  },
];

const NavMenu = ({ onClose }) => (
  <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={onClose}
    onKeyDown={onClose}
  >
    <List>
      {MenuItems.map(({ text, link, icon}) => {
        return link ? (
          <Link to={link} key={text}>
            <NavItem text={text} icon={icon} key={text}/>
          </Link>
        ) : (<NavItem text={text} icon={icon} key={text}/>);
      })}
    </List>
  </Box>
);

NavMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NavMenu;
