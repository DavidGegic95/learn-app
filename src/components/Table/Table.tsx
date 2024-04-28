import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableType, TrainerType } from '../../pages/MyAccountPage/utils';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

export default function BasicTable({
  rows,
  role,
  checkbox,
  state,
}: {
  rows: TableType[];
  role: 'student' | 'trainer';
  checkbox?: boolean;
  state?: any;
}) {
  // const handleChange = (event: any): void => {
  //   event.target.checked = state[event.target.name].checked;
  // };
  return (
    <TableContainer sx={{ minWidth: '400px' }} component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            {checkbox && <TableCell></TableCell>}
            <TableCell>NAME</TableCell>
            <TableCell align='left'>SPECIALIZATION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {checkbox && (
                <TableCell component='th' scope='row'>
                  <Checkbox name={row.name} key={row.name} />
                </TableCell>
              )}
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              {'specialization' in row ? (
                <TableCell align='left'>{row.specialization}</TableCell>
              ) : (
                <TableCell
                  sx={{
                    color: `${row.status === 'ACTIVE' ? '#60CFA5FF' : '#F22128FF'}`,
                  }}
                  align='left'
                >
                  {row.status}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
