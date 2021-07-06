import React from 'react';
import { Paper, Typography, Theme, createStyles, makeStyles } from '@material-ui/core';

import { simpleConfig, advancedConfig } from '../assets/data/configs';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#282C34',
      margin: '1em',
      padding: theme.spacing(2, 2),
      color: '#adb0bb',
    },
    textarea: {
      color: '#e6e5e8',
      width: '100%',
      height: '10em',
      backgroundColor: '#282C34',
    },
  }),
);

const GitConfig: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          File .gitconfig:
        </Typography>
        <Typography component="p">Sur Linux: ~/.gitconfig</Typography>
        <Typography component="p">Sur Windows: C:\Users\YourName</Typography>
        <Typography component="p">Config simple:</Typography>
        <textarea className={classes.textarea} defaultValue={simpleConfig} />
        <Typography component="p">Config @porteneuve:</Typography>
        <textarea className={classes.textarea} defaultValue={advancedConfig} />
      </Paper>
    </div>
  );
};

export default GitConfig;
