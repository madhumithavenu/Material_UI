import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import AccessAlarmSharpIcon from '@mui/icons-material/AccessAlarmSharp';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';

const Test11 = () => {
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <IconButton onClick={()=>alert("Icon Selected")}>
                        {" "}
                        <AccountCircleIcon />
                    </IconButton>
                    <IconButton >
                        {" "}
                        <ArrowCircleDownIcon color='error'/>
                    </IconButton>
                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default Test11