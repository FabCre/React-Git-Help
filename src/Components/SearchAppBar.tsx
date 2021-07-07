import React from 'react';
import { alpha, AppBar, createStyles, InputBase, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import MenuButton from './MenuButton';
import { MenuCategory } from './App';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 6),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 0,
        '&:focus': {
          width: 500,
        },
      },
    },
  }),
);

interface SearchAppBarOwnProps {
  chooseCategory: (event: React.MouseEvent<HTMLLIElement>) => void;
  searchChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  category: MenuCategory;
}

type SearchAppBarType = SearchAppBarOwnProps;

const SearchAppBar: React.FC<SearchAppBarType> = ({ chooseCategory, searchChange, category }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <MenuButton chooseCategory={chooseCategory} />
          <Typography className={classes.title} variant="h4" noWrap>
            Git Help {category ? category : null}
          </Typography>
          {category === 'Command' && (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Command"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(event) => searchChange(event)}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchAppBar;
