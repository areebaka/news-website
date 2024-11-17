import { Alert, Button, Container, Typography } from '@mui/material';
import React from 'react';

const ErrorAlert = ({ errorMessage, onRetry }) => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Alert severity="error">
        <Typography variant="h6">{errorMessage || 'Error fetching news.'}</Typography>
        <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
          Please try again later. If the problem persists, contact support.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={onRetry}
        >
          Retry
        </Button>
      </Alert>
    </Container>
  );
};

export default ErrorAlert;
