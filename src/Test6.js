import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const Test6 = () => {
    const [open, setOpen] =useState(false);
  return (
    <div>
        <Button onClick={()=>setOpen(true)}>Open Dialog</Button>
        <Modal open={open} onClose={()=>setOpen(false)} >
            <Box position="absolute" top="50%" left="50%">
                <Typography>It is a Modal</Typography>

                <Button variant='contained' onClick={()=>setOpen(false)}>Click me</Button>
            </Box>
        </Modal>
    </div>
  )
}

export default Test6