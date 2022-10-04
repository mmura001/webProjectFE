import { AppBar, Box } from '@material-ui/core';
import { Button, IconButton, Menu, Toolbar, Typography } from '@mui/material';
import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserMeSelector } from '../HomePage/homeSlice';
import { updateFunction } from "../HomePage/homeSlice";
import { updatePasswordFunction } from "../HomePage/homeSlice";





function ProfilePage(){
    const dispatch = useDispatch();
    const userInfo = useSelector(UserMeSelector);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [alterusername, setAltername] = useState('');
    const [alterpassword, setAlterpassword] = useState('');


    const handleInputUsernameChange = (e, key) => {
        switch(key){
          
          case 'username':
            setAltername(e.target.value);
            break
          default:
            break
        }
      }
      const handleInputPasswordChange = (e, key) => {
        switch(key){
          
          case 'password':
            setAlterpassword(e.target.value);
            break
          default:
            break
        }
      }
    
    
      
    const updateUsername = () => {
        
          const tempForm = {
            username: alterusername,
            email: email
          }
          dispatch(updateFunction(tempForm))   
    }

    const updatePassword = () => {
        
        const tempForm = {
          password: alterpassword,
          email: email
        }
        dispatch(updatePasswordFunction(tempForm))   
  }

    useEffect(() => {
        if(localStorage.getItem('email') != null && localStorage.getItem('email') != undefined){
            setEmail(localStorage.getItem('email'))
            setUsername(localStorage.getItem('username'))
        }

    },[dispatch, userInfo])
    

    return (
      <div className='App'>
        <AppBar>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Profile
            </Typography>
            </Toolbar>
        </AppBar>
        
        <div style={{ paddingTop:100 }}>
        <Box>
        <h1> Page</h1>
        </Box>
        </div>
 
        {
            email != '' && <div>Email: {email}</div>
        }
                {
            username != '' && <div>Username: {username}</div>
        }
        <input
          type="text"
          placeholder="Edit Username..."
          onChange={(e) => handleInputUsernameChange(e, 'username')}
        />
        <button onClick={updateUsername}> Update </button>


        {/* <input
          type="text"
          placeholder="Reset password..."
          onChange={(e) => handleInputPasswordChange(e, 'password')}
        />
        <button onClick={updatePassword}> Update </button> */}
       
      </div>
    );
}

export default ProfilePage;