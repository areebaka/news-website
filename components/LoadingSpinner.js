import { Container, CircularProgress } from '@mui/material';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}
    >
      <CircularProgress />
    </Container>
  );
};

export default LoadingSpinner;
