import { KeoDrawer, KeoDialog } from 'presentation/components';
import { DRAWER_WIDTH } from 'domain/_app.constants';
import { observer } from 'mobx-react-lite';
import { Box, Toolbar } from '@mui/material';
import { menuRoutes } from '@config';
import DrawerLayoutNavbar from './DrawerLayoutNavbar';

interface Props {
  children: React.ReactNode;
  title: string;
}

function DrawerLayout({ title, children }: Props) {
  return (
    <>
      <KeoDrawer list={menuRoutes} />
      <DrawerLayoutNavbar title={title} />
      <Toolbar />
      <Box
        sx={{
          ml: `${DRAWER_WIDTH}px`,
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          p: 3,
        }}
      >
        {children}
      </Box>
      <KeoDialog />
    </>
  );
}

export default observer(DrawerLayout);