import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Action, KeoTableOrderType, KeoTablePagination, Sticky } from './interface';
import { getComparator } from './utils/get-comparator.utils';
import KeoTableHead from './KeoTableHead';
import { KeoTableToolbar } from './KeoTableToolbar';
import { sorter } from './utils/sorter.utils';
import { Checkbox } from '@mui/material';
import { ReactNode, useMemo, useState } from 'react';
import KeoTableField from './KeoTableField';

export interface KeoTableColumnsRenderProps<T> {
  row: T;
  column: KeoTableColumnsProps<T>;
}

export interface KeoTableColumnsProps<T> {
  headerName: string;
  field: keyof T;
  type: 'string' | 'number' | ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: number;
  editable?: boolean;
  render?: (params: KeoTableColumnsRenderProps<T>) => ReactNode;
  sortable?: boolean;
}

export type KeoTableProps<T> = 
  KeoTablePagination & 
  {
    title?: string;
    idField: keyof T;
    columns: KeoTableColumnsProps<T>[];
    rows: T[];
    dense?: boolean;
    sticky?: boolean | Sticky;
    action?: Action<T>[];
  } 

export default function KeoTable<T>({ 
  columns, 
  idField, 
  rows, 
  dense, 
  title, 
  sticky, 
  action, 
  pagination, 
  paginationOptions 
}: KeoTableProps<T>) {
  const [order, setOrder] = useState<KeoTableOrderType>('asc');
  const [orderBy, setOrderBy] = useState<keyof T>();
  const [selected, setSelected] = useState<readonly T[keyof T][]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const createSortHandler =
    (property: keyof T) => (event: React.MouseEvent<unknown>) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((row) => row[idField]);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>, value: T[keyof T]) => {
    const selectedIndex = selected.indexOf(value);
    let newSelected: readonly T[keyof T][] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, value);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (value: T[keyof T]) => selected.indexOf(value) !== -1;

  const emptyRows = useMemo(() => page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0, [page, rowsPerPage, rows]);
  const noRows = useMemo(() => rows.length < 1, [rows])
  const stickyHeader = useMemo(() => Boolean(sticky), [sticky])

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <KeoTableToolbar<T>
          idField={idField}
          selectedId={selected}
          title={title ?? ''}
          numSelected={selected.length}
          action={action} 
          rows={rows} 
          columns={columns}
        />
        <TableContainer 
          sx={{ 
            maxHeight: sticky 
              ? typeof sticky === 'object' 
                ? sticky.maxHeight 
                : 500 
              : 'auto' 
          }}
        >
          <Table
            stickyHeader={stickyHeader}
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <KeoTableHead
              action={!!action}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleCheckAll}
              onRequestSort={createSortHandler}
              rowCount={rows.length} 
              columns={columns}
            />
            <TableBody>
              {sorter<T>(
                  rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage), 
                  getComparator<T>(order, orderBy)
                ).map((row, index) => {
                  const isItemSelected = isSelected(row[idField]);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >
                      {action && (
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            name={String(row[idField])}
                            onChange={(event) => handleCheck(event, row[idField])}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                      )}
                      {columns.map((column, index) => (
                        <TableCell 
                          key={index} 
                          align={column.align} 
                          width={column.width}
                          contentEditable={column.editable}
                          suppressContentEditableWarning={true}
                        >
                          {column.render
                              ? column.render({row, column})
                              : <>{row[column.field]}</>
                          }
                          {/* {column.editable 
                            ? <KeoTableField 
                                name={String(column.field)} 
                                value={String(row[column.field])} 
                                onChange={(e) => e.currentTarget.value} // TODO: fix this
                              />
                            : column.render
                              ? column.render({row, column})
                              : <>{row[column.field]}</>
                          } */}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={columns.length} />
                </TableRow>
              )}
              {noRows && (
                <TableRow style={{ height: (dense ? 33 : 53) }}>
                  <TableCell colSpan={columns.length} align="center">No rows</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}