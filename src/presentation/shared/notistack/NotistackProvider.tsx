import { SnackbarProvider } from "notistack";
import Notistack from "presentation/shared/notistack/Notistack";
import { ReactNode } from "react";

export default function NotistackProvider({ children }: {children: ReactNode}) {
  return (
    <SnackbarProvider 
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      hideIconVariant
    >
      {children}
      <Notistack />
    </SnackbarProvider>
  )
}