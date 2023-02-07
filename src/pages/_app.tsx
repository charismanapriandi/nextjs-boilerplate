import { GlobalStyles, ThemeProvider } from '@mui/material';
import { theme } from '@config';
import type { AppProps } from 'next/app';
import "@fontsource/poppins/100.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"
import '../main';
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={`* { box-sizing: border-box }`} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
