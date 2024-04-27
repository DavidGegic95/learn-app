import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableType, TrainerType } from '../../pages/MyAccountPage/utils';
import Checkbox from '@mui/material/Checkbox';

export default function BasicTable({
  rows,
  role,
  checkbox,
}: {
  rows: TableType[];
  role: 'student' | 'trainer';
  checkbox?: boolean;
}) {
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
                  <Checkbox />
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
