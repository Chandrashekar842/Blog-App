import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

const Auth = () => {

  const [isSignedIn, setIsSignedIn] = useState(false)
  const [inputs, setInputs] = useState({
    name: "", email: "", password: ""
  })

  const handleChange = e => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <Box 
          display='flex' 
          flexDirection={'column'} 
          justifyContent={'center'} 
          alignItems={'center'}
          padding={3}
          boxShadow='-10px 10px 15px #ccc'
          margin='auto'
          marginTop={5}
          maxWidth={400}
          borderRadius={5}
        >
          <Typography variant='h4' padding={3} textAlign={'center'}> { !isSignedIn ? 'Login' : 'SignUp'}</Typography>
            { isSignedIn && <TextField 
              placeholder='Name' 
              value={inputs.name} 
              margin='normal'
              name='name'
              onChange={handleChange}
              />
            }
            <TextField 
              type={'email'} 
              placeholder='Email' 
              value={inputs.email} 
              margin='normal'
              name='email'
              onChange={handleChange}
            />
            <TextField 
              type={'password'} 
              placeholder='Password' 
              value={inputs.password} 
              margin='normal'
              name='password'
              onChange={handleChange}
            />
            <Button variant='contained' sx={{borderRadius: 3, marginTop: 2}} color='warning' type='submit'>Submit</Button>
            <Button onClick={() => setIsSignedIn(!isSignedIn) } sx={{borderRadius: 3, marginTop: 3}}>Change to { isSignedIn ? 'Login' : 'SignUp'}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth
