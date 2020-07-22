import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  container: {
    width: '60%',
  },
  table: {
    width: '50%',
  },
});

export default function SimpleTable({ result }) {
  const classes = useStyles();

  console.log(result)
  return (
    <TableContainer className={classes.container}  component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sample ID</TableCell>
            <TableCell align="right">Probability of normal sample</TableCell>
            <TableCell align="right">Probability of cancerous sample </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((row, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {key}
              </TableCell>
              <TableCell style={{ backgroundColor: row[0] >= 0.75 ? 'lightgreen' : '' }} align="right">{row[0]}</TableCell>
              <TableCell style={{ backgroundColor: row[1] >= 0.75 ? '#f28080' : '' }} align="right">{row[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}