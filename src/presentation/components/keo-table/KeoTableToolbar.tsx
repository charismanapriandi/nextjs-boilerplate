import KeoIcon from "../keo-icon/KeoIcon";
import { KeoTableToolbarProps } from "./interface";
import { alpha, Button, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";

export function KeoTableToolbar<T>({ numSelected, title, action, selectedId, rows, columns, idField }: KeoTableToolbarProps<T>) {

  const getSelectedRows = () => {
    if (!selectedId) return console.error('no item selected')

    return selectedId.map(id => rows.filter(row => row[idField] === id)).flat()
  }
  
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title}
        {numSelected > 0 && (
          <Typography
            sx={{ flex: '1 1 100%', ml: 3 }}
            color="inherit"
            variant="subtitle1"
            component="span"
          >
            {numSelected} selected
          </Typography>
        )}
      </Typography>
      {numSelected > 0 ? (
        <>
          {action && action.map(item => {
            return item.icon
            ? (
              <Tooltip title="Edit">
                <IconButton 
                  disabled={!item.allowMultiple ? selectedId ? selectedId?.length > 1 : false : false} 
                  onClick={() => item.handler(selectedId ?? [], {rows, columns, getSelected: getSelectedRows})}
                >
                  <KeoIcon {...item.icon} />
                </IconButton>
              </Tooltip>
            )
            : (
              <Button
                disabled={!item.allowMultiple ? selectedId ? selectedId?.length > 1 : false : false} 
                onClick={() => item.handler(selectedId ?? [], {rows, columns, getSelected: getSelectedRows})}
              >
                action.label
              </Button>
            )
          })}
        </>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <KeoIcon variant="ionicon-outlined" name="Filter" />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}