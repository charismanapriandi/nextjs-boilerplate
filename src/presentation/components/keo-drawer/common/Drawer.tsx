import { Drawer, styled } from '@mui/material';
import { DRAWER_WIDTH } from 'domain/_app.constants';

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  boxSizing: 'border-box',
  width: `${DRAWER_WIDTH}px`,
  '.MuiDrawer-paper': {
    backgroundColor: theme.color.gray[900],
    width: `${DRAWER_WIDTH}px`,
    boxSizing: 'border-box',
    padding: '20px 15px',
  },
  // '.MuiList-root': {
  //   paddingLeft: '10px',
  //   paddingRight: '10px',
  //   '&:first-of-type': {
  //     paddingTop: '20px',
  //   },
  //   '&:last-child': {
  //     paddingBottom: '20px',
  //   },
  // },
  '.MuiListItemButton-root': {
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(['box-shadow', 'background-color'], {
      duration: theme.transitions.duration.standard,
    }),
    '&:hover': {
      backgroundColor: theme.color.gray[800],
    },
    '&.Mui-selected': {
      backgroundColor: theme.color.gray[800],
      '&:hover': {
        boxShadow: `0 0 0 2px ${theme.color.gray[700]}`,
        backgroundColor: theme.color.gray[800],
      },
    },
    '.MuiListItemIcon-root': {
      minWidth: '45px',
    },
    '.MuiListItemText-primary': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: '1',
      WebkitBoxOrient: 'vertical',
      fontWeight: 200,
      fontSize: '14px',
    },
  },
}));

export default DrawerStyled;
