import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import Head from 'next/head';
import { CustomThemeProvider } from '../context/ThemeContext';


export default function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
        <title>Daily News</title> 
        <link rel="icon" href="/logo.jpg" /> 
      </Head>
    {/* <ThemeProvider theme={theme}> */}
    <CustomThemeProvider>
    <CssBaseline />
      <Component {...pageProps} />
      </CustomThemeProvider>
    {/* </ThemeProvider> */}
    </>
  );
}
