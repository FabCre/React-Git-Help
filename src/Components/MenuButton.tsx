import React from 'react';
import { createStyles, makeStyles, Theme, Menu, MenuItem, IconButton, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

interface MenuButtonOwnProps {
  chooseCategory: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

type MenuButtonProps = MenuButtonOwnProps;

const MenuButton: React.FC<MenuButtonProps> = ({ chooseCategory }) => {
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
      <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true">
        <MenuIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          onClick={(event) => {
            chooseCategory(event);
            handleClose();
          }}
        >
          Command
        </MenuItem>
        <MenuItem
          onClick={(event) => {
            chooseCategory(event);
            handleClose();
          }}
        >
          Rebase Process
        </MenuItem>
        <MenuItem
          onClick={(event) => {
            chooseCategory(event);
            handleClose();
          }}
        >
          Merge Process
        </MenuItem>
        <MenuItem
          onClick={(event) => {
            chooseCategory(event);
            handleClose();
          }}
        >
          HotFix Process
        </MenuItem>
        <MenuItem
          onClick={(event) => {
            chooseCategory(event);
            handleClose();
          }}
        >
          Git config
        </MenuItem>
        <MenuItem>
          <Link href="https://git-scm.com/docs" target="_blank" color="inherit">
            Git official doc
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuButton;
