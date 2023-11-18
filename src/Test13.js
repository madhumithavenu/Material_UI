import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const CustomizeTypography = styled(Typography)`
color: #000055;
:hover{
    color: #75125c;
    background: #afafaf;
}`
const Test13 = () => {
    return (
        <Box>
            <CustomizeTypography variant='h1'>Hello World</CustomizeTypography>
        </Box>
    )
}

export default Test13