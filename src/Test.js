import React, { useState } from 'react';
import {Typography, Button, TextField} from '@mui/material';

const Test = () => {
    const [name, setName] = useState("");
  return (
    <div>
        <Typography variant='h5' sx={{color:'red', border: '1px solid black', borderRadius:10}}>Hello World</Typography>
        <Button onClick={()=>alert("Button Clicked")} color='success' sx={{margin:3}} size='large' variant='contained'>First</Button>
        <Button onClick={()=>alert("Button Clicked")} color='error' sx={{margin:3}} size='medium' variant='outlined'>Second</Button>
        <Button onClick={()=>alert("Button Clicked")} color='info' sx={{margin:3}} size='small' variant='text'>Third</Button>
    <br></br>
        <TextField value={name} onChange={(e)=>setName(e.target.value)} type={'text'} sx={{margin:3}} placeholder='Name' variant='outlined'/>
        <TextField type={'email'} sx={{margin:3}} placeholder='Email' variant='standard'/>
        <TextField type={'password'} sx={{margin:3}} placeholder='Password' variant='filled'/>
        <Typography>{name}</Typography>
    </div>
  )
}

export default Test