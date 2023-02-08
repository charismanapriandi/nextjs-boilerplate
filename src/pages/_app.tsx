import { GlobalStyles, ThemeProvider } from '@mui/material';
import { theme } from '@config';
import type { AppProps } from 'next/app';
import { NotistackProvider } from '@presentation';
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

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NotistackProvider>
        <GlobalStyles styles={`* { box-sizing: border-box }; body { margin: 0; padding: 0 }`} />
        <Component {...pageProps} />
      </NotistackProvider>
    </ThemeProvider>
  )
}

export default App
