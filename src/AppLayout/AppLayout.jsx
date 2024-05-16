import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const AppLayout = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: '#333' }}>
            <Toolbar>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              HAN SANG GYEOL
              </Typography>
              <Button color="inherit" href='#about-me'>About me</Button>
              <Button color="inherit" href='#skills'>skills</Button>
              <Button color="inherit" href='#my-projects'>projects</Button>
            </Toolbar>
          </AppBar>
          <Outlet/>
        </Box>
      );
}

export default AppLayout