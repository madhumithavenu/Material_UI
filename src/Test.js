import React, { useState } from 'react';
import { Typography, Button, TextField, FormGroup, FormControlLabel, Checkbox,InputLabel, MenuItem, Select, FormControl, AppBar, Toolbar } from '@mui/material';

const Test = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        subscribe: false,
        age: 0
    });
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }
    return (
        <div>
            <Typography variant='h5' sx={{ color: 'red', border: '1px solid black', borderRadius: 10 }}>Hello World</Typography>
            <Button onClick={() => alert("Button Clicked")} color='success' sx={{ margin: 3 }} size='large' variant='contained'>First</Button>
            <Button onClick={() => alert("Button Clicked")} color='error' sx={{ margin: 3 }} size='medium' variant='outlined'>Second</Button>
            <Button onClick={() => alert("Button Clicked")} color='info' sx={{ margin: 3 }} size='small' variant='text'>Third</Button>
            <br></br>
            <form style={{ display: 'flex', flexDirection: "column" }} onSubmit={handleSubmit}>
                <TextField name='name' value={inputs.name} onChange={handleChange} type={'text'} sx={{ margin: 3 }} placeholder='Name' variant='outlined' />
                <TextField name='email' value={inputs.email} onChange={handleChange} type={'email'} sx={{ margin: 3 }} placeholder='Email' variant='standard' />
                <TextField name='password' value={inputs.password} onChange={handleChange} type={'password'} sx={{ margin: 3 }} placeholder='Password' variant='filled' />
                {/* <Typography>{name}</Typography> */}
                <FormGroup>
                    <FormControlLabel control={<Checkbox onChange={() => setInputs((prev) => ({
                        ...prev, subscribe: !inputs.subscribe
                    }))} />} label="Subscribe To Newsletter" />
                    {/* <FormControlLabel required control={<Checkbox />} label="Required" />
                    <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
                </FormGroup>
                <FormControl fullWidth>
                    <InputLabel>Age</InputLabel>
                    <Select name='age'
                        value={inputs.age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Button type='submit'>Submit</Button>
            </form>

            <AppBar >
                <Toolbar>
                    <Typography>LOGO</Typography>
                    <Button variant='contained' sx={{marginLeft:"auto"}} color='warning'>Hello</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Test