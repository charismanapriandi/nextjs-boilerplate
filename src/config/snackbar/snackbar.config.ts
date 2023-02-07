import { SnackbarProviderProps } from "notistack"

export const snackbarConfig: SnackbarProviderProps = {
  anchorOrigin: {
    horizontal: 'center',
    vertical: 'bottom',
  },
  maxSnack: 2,
  preventDuplicate: true,
  children: undefined
}