import { AppBar as MuiAppBar, styled, Toolbar, Typography, useTheme } from '@mui/material';
import React from 'react';
import { DRAWER_WIDTH } from 'domain/_app.constants';
import { LanguageSwitcher } from '@presentation';

interface Props {
  title?: string;
}

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  marginLeft: `${DRAWER_WIDTH}px`,
  width: `calc(100% - ${DRAWER_WIDTH}px)`,
  backgroundColor: theme.palette.common.white,
  boxShadow: 'none',
  backgroundImage: `linear-gradient(to right, ${theme.color.gray[200]} 33%, rgba(255, 255, 255,0) 0%)`,
  backgroundPosition: 'bottom',
  backgroundSize: '10px 1px',
  backgroundRepeat: 'repeat-x',
}));

export default function DrawerLayoutNavbar({ title }: Props) {
  const theme = useTheme();

  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          sx={{ color: theme.color.gray[900] }}
          fontWeight={600}
        >
          {title}
        </Typography>
        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  );
}