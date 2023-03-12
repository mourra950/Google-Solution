import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button} from '@mui/material';

function Navbar() {
  return (
      <AppBar position='static' color='inherit'>
        <Toolbar>
          <Typography variant='h4' component="div" sx={{ flexGrow: 1}}>
            Global Care
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar