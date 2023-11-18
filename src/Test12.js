import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Test12 = () => {
    const theme = useTheme();
    console.log(theme);
    return (
        <Box>
            <Typography variant='h1' color="primary">
                Hello World
            </Typography>
        </Box>
    )
}

export default Test12