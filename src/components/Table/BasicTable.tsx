import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableType } from '../../pages/MyAccountPage/utils';
import { Dispatch, SetStateAction } from 'react';
import SimpleCheckbox from '../SimpleCheckbox/SimpleCheckbox';
import { v4 as uuidv4 } from 'uuid';

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
    <TableContainer
      sx={{
        '@media (max-width: 599px)': {
          minWidth: '340px',
        },
        minWidth: '400px',
      }}
      component={Paper}
    >
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            {checkbox && <TableCell align='left'></TableCell>}
            {cells.map((cell) => {
              return (
                <TableCell align='left' key={uuidv4()}>
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
                key={uuidv4()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {checkbox && listChecked && setListChecked && (
                  <TableCell key={uuidv4()} component='th' scope='row'>
                    <SimpleCheckbox
                      listChecked={listChecked}
                      setListChecked={setListChecked}
                      name={row.name}
                      key={uuidv4()}
                    />
                  </TableCell>
                )}
                {Object.keys(row).map((key) => {
                  if ('status' in row && key === 'status') {
                    return (
                      <TableCell
                        key={uuidv4()}
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
                      <TableCell component='th' scope='row' key={uuidv4()}>
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
