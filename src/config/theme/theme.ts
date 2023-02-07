import { createTheme } from '@mui/material';
import { colors } from './colors';

export const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        // root:
      },
      // minHeight: 64,
      // paddingLeft: theme.spacing(3),
      // paddingRight: theme.spacing(3),
      // paddingTop: theme.spacing(1),
      // paddingBottom: theme.spacing(1),
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: '12px 15px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 15px',
          textTransform: 'capitalize',
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            boxShadow: 'none',
            ':hover': {
              boxShadow: 'none',
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
      variants: [
        {
          props: { color: 'danger' },
          style: {
            color: colors.jellyBean[900],
          },
        },
      ],
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: colors.gray[500],
          opacity: 0.2,
        },
      },
    },
    // Table
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '12px 15px',
        },
        head: {
          fontWeight: 600,
        },
      },
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: colors.gray[900],
    },
    // secondary: {
    //   main: '#E3B416',
    // },
    error: {
      main: colors.jellyBean[900],
    },
    tableBorder: {
      main: colors.gray[50],
    },
    // mode: 'light'
  },
  shape: {
    borderRadius: 10,
  },
  // extended
  color: {
    gray: colors.gray,
    smoke: colors.smoke,
    jellyBean: colors.jellyBean,
  },
});
