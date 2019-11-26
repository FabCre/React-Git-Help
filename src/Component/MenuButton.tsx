import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

const MenuButton: React.FC = ({ children: chooseCategory }: any) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        onClick={handleClick}
        aria-controls="simple-menu"
        aria-haspopup="true"
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={event => {
            chooseCategory(event);
            handleClose();
          }}
        >
          Command
        </MenuItem>
        <MenuItem
          onClick={event => {
            chooseCategory(event);
            handleClose();
          }}
        >
          Rebase Process
        </MenuItem>
        <MenuItem
          onClick={event => {
            chooseCategory(event);
            handleClose();
          }}
        >
          Merge Process
        </MenuItem>
        <MenuItem
          onClick={event => {
            chooseCategory(event);
            handleClose();
          }}
        >
          GitConfig
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuButton;
