import { KeoTableHeadProps } from "./interface";
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from '@mui/utils';

export default function KeoTableHead<T>({
  numSelected,
  onSelectAllClick,
  onRequestSort,
  action,
  order, 
  orderBy,
  rowCount,
  columns,
}: KeoTableHeadProps<T>) {
  return (
    <TableHead>
      <TableRow>
        {action && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all items',
              }}
            />
          </TableCell>
        )}
        {columns.map((column, index) => (
          <TableCell
            key={index}
            align={column.align}
            width={column.width}
            sortDirection={orderBy === column.field ? order : false}
          >
            {column.sortable 
              ? (
                <TableSortLabel
                  active={orderBy === column.field}
                  direction={orderBy === column.field ? order : 'asc'}
                  onClick={onRequestSort(column.field)}
                >
                  {column.headerName}
                  {orderBy === column.field ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              )
              : column.headerName}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}