import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableCell, TableBody, TableHead, TableRow } from '@material-ui/core';

import cmdTable from '../data/command';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '1em',
    },
    table: {
      minWidth: 650,
      backgroundColor: '#282C34',
    },
    cmd: {
      color: '#adb0bb',
      borderColor: '#adb0bb',
      fontSize: 'medium',
      fontWeight: 'bold',
    },
    cmdCell: {
      color: '#adb0bb',
      borderColor: '#adb0bb',
      fontSize: 'medium',
      fontWeight: 'normal',
    },
  }),
);

interface CommandTableOwnProps {
  searchValue: string | null;
}

type CommandTableProps = CommandTableOwnProps;

const CommandTable: React.FC<CommandTableProps> = ({ searchValue }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.cmd}>
            <TableCell className={classes.cmd}>Command</TableCell>
            <TableCell align="left" className={classes.cmd}>
              Description
            </TableCell>
            <TableCell align="left" className={classes.cmd}>
              Example
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cmdTable
            .filter((cmd) => (searchValue ? cmd.cmd.includes(searchValue) : true))
            .map((cmd) => (
              <TableRow key={cmd.cmd} className={classes.cmd}>
                <TableCell component="th" scope="row" className={classes.cmd}>
                  {cmd.cmd}
                </TableCell>
                <TableCell align="left" className={classes.cmdCell}>
                  {cmd.desc}
                </TableCell>
                <TableCell align="left" className={classes.cmdCell}>
                  {cmd.example}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default CommandTable;
