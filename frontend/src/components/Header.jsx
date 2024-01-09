import React from 'react'
import { AppBar, Box, Button, Tab, Toolbar, Typography, Tabs } from '@mui/material'

const Header = () => {
  return (
    <AppBar position="sticky" sx={{background: "linear-gradient(90deg, rgba(226,217,36,1) 30%, rgba(94,138,48,1) 69%)"}}>
        <Toolbar>
            <Typography variant='h5'>Blog App</Typography>
            <Box display='flex'>
                <Tabs>
                    <Tab label='Blogs' />
                    <Tab label='My Blogs' />
                    <Tab label='Add Blog' />
                </Tabs>
            </Box>
            <Box display='flex' marginLeft='auto' >
                <Button variant='contained' color='info' sx={{margin: 1, borderRadius: 7}}>Login</Button>
                <Button variant='contained' color='info' sx={{margin: 1, borderRadius: 7}}>SignUp</Button>
                <Button variant='contained' color='info' sx={{margin: 1, borderRadius: 7}}>LogOut</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
