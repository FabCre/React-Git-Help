import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {simpleConfig, advancedConfig} from "./data/configs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "1em",
      padding: theme.spacing(2, 2)
    }
  })
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
        <textarea defaultValue={simpleConfig}>
        </textarea>
        <Typography component="p">Config @porteneuve:</Typography>
        <textarea defaultValue={advancedConfig}>
        </textarea>
      </Paper>
    </div>
  );
};

export default GitConfig;
