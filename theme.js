import { createTheme } from '@mui/material/styles';


const commonPaginationStyles = {
  MuiPagination: {
    styleOverrides: {
      root: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '16px',
      },
      ul: {
        '& .Mui-selected': {
          backgroundColor: '#dc004e',
          // backgroundColor: 'red',
          color: 'white',
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: '#dc004e',
        },
        background: {
          default: '#f5f5f5',
        },
      },
      components: {
        ...commonPaginationStyles,
      },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#ce93d8',
    },
    background: {
      default: '#121212',
    },
  },
  components: {
    ...commonPaginationStyles,
  },
});
