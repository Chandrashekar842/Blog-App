import React, { useState } from 'react'

import { AppBar, Box, Button, Tab, Toolbar, Typography, Tabs } from '@mui/material'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const [value, setValue] = useState();
    const isLoggedIn = useSelector(state => state.isLoggedIn)

  return (
    <AppBar position="sticky" sx={{background: "linear-gradient(90deg, rgba(226,217,36,1) 30%, rgba(94,138,48,1) 69%)"}}>
        <Toolbar>
            <Typography variant='h5'>Blog App</Typography>
            <Box display='flex' marginLeft='auto' marginRight={'auto'}>
                <Tabs textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                    <Tab LinkComponent={Link} to='/blogs' label='Blogs' />
                    <Tab LinkComponent={Link} to='/myblogs' label='My Blogs' />
                    <Tab LinkComponent={Link} to='/blogs/add' label='Add Blog' />
                </Tabs>
            </Box>
            <Box display='flex' marginLeft='auto' >
                { !isLoggedIn && <>
                    <Button LinkComponent={Link} to='/auth' variant='contained' color='info' sx={{margin: 1, borderRadius: 7}}>Login</Button>
                <Button LinkComponent={Link} to='/auth' variant='contained' color='info' sx={{margin: 1, borderRadius: 7}}>SignUp</Button>
                </> }
                {isLoggedIn && <Button LinkComponent={Link} to='/auth' variant='contained' color='info' sx={{margin: 1, borderRadius: 7}}>LogOut</Button>}
                
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
