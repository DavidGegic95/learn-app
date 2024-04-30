import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableType, TrainerType } from '../../pages/MyAccountPage/utils';
import Checkbox from '@mui/material/Checkbox';
import { Dispatch, SetStateAction, useState } from 'react';
import SimpleCheckbox from '../SimpleCheckbox/SimpleCheckbox';

export default function BasicTable({
  rows,
  checkbox,
  cells,
  listChecked,
  setListChecked,
}: {
  rows: TableType[];
  checkbox?: boolean;
  state?: any;
  cells: string[];
  listChecked?: object;
  setListChecked?: Dispatch<SetStateAction<{}>>;
}) {
  return (
    <TableContainer sx={{ minWidth: '400px' }} component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            {checkbox && <TableCell align='left'></TableCell>}
            {cells.map((cell) => {
              return (
                <TableCell align='left' key={cell}>
                  {cell.toUpperCase()}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {checkbox && listChecked && setListChecked && (
                  <TableCell component='th' scope='row'>
                    <SimpleCheckbox
                      listChecked={listChecked}
                      setListChecked={setListChecked}
                      name={row.name}
                      key={row.name}
                    />
                  </TableCell>
                )}
                {Object.keys(row).map((key) => {
                  if ('status' in row && key === 'status') {
                    return (
                      <TableCell
                        sx={{
                          color: `${row.status === 'ACTIVE' ? '#60CFA5FF' : '#F22128FF'}`,
                        }}
                        align='left'
                      >
                        {row.status}
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell component='th' scope='row' key={key}>
                        {row[key as keyof typeof row]}
                      </TableCell>
                    );
                  }
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// return (
//   <TableRow
//     key={row.name}
//     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//   >
// {
//   checkbox && (
//     <TableCell component='th' scope='row'>
//       <Checkbox name={row.name} key={row.name} />
//     </TableCell>
//   );
// }
//     <TableCell component='th' scope='row'>
//       {row.name}
//     </TableCell>
//     {'specialization' in row ? (
//       <TableCell align='left'>{row.specialization}</TableCell>
//     ) : (
//       <TableCell
//         sx={{
//           color: `${row.status === 'ACTIVE' ? '#60CFA5FF' : '#F22128FF'}`,
//         }}
//         align='left'
//       >
//         {row.status}
//       </TableCell>
//     )}
//   </TableRow>
// );
