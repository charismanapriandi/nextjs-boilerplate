import { List as MuiList, styled } from '@mui/material';

const DrawerList = styled(MuiList)(() => ({}));

DrawerList.defaultProps = {
  disablePadding: true,
};

export default DrawerList;
