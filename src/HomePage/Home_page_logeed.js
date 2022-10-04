import { AppBar, Box } from '@material-ui/core';
import { Button, IconButton, Menu, Toolbar, Typography } from '@mui/material';
import React, { Component } from 'react';
import SearchBar from '../componenet/SearchBar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuBar from './Menu_bar';

class HomePageLogged extends Component {
  render() {
    return (
      <div className='App'>
        
        <div style={{ paddingTop:100 }}>
        <Box>
        <h1>Logegd in Home Page</h1>
        </Box>
        </div>
        <SearchBar placeholder={"Search.."}/>
      </div>
    );
  }
}

export default HomePageLogged;
