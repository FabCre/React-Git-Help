import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import cmdTable from './data/command';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '1em',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }),
);

const CommandTable = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Command</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Example</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cmdTable.map(cmd => (
            <TableRow key={cmd.cmd}>
              <TableCell component="th" scope="row">
                {cmd.cmd}
              </TableCell>
              <TableCell align="left">{cmd.desc}</TableCell>
              <TableCell align="left">{cmd.exemple}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default CommandTable;
