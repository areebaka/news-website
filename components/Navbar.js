import { AppBar, Box, Toolbar, Typography, Button, IconButton, Switch } from '@mui/material';
import Image from 'next/image';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const Navbar = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'red' }}>
        <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1, p: 0 }}>
            <Image src="/logo.jpg" alt="Logo" width={40} height={40} />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , ml: 0 }}>
            Daily News
          </Typography>

      
          <Button color="inherit">Home</Button>
          <Switch
        checked={mode === 'dark'}
        onChange={toggleTheme}
        inputProps={{ 'aria-label': 'toggle theme' }}
      />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
